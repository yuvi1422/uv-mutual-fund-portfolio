import { call, put, takeEvery } from 'redux-saga/effects';
import UvNumberPojo from '../../components/uv_number/uv_number.pojo';
import { UvNumberProps } from '../../shared/Types';
import UVCategory from '../../uv_interface.category';
import UVItem from '../../uv_interface.item';
import { updateDashboard } from './uv_dashboard.actions';

import UvDashboardApi from './uv_dashboard.api';
import UV_DASHBOARD from './uv_dashboard.constants';


function* loadDashboard() {

  let response = yield call(UvDashboardApi.getDashboardData);

  let largestCategoryIndex = 0;
  let largestItemIndexes: number[] = [];
  response.data.categories.reduce((categoryTotalAccumulator: number, currentCategory: UVCategory, categoryIndex: number) => {
    let categoryTotal = currentCategory.items.reduce((itemAccumulator: number, currentItem: UVItem, itemIndex: number, items: UVItem[])=> {
      if(itemIndex > 0 && currentItem.current.amount > items[itemIndex-1].current.amount) {
        largestItemIndexes[categoryIndex] = itemIndex;
      }
      return itemAccumulator + currentItem.current.amount;
    }, 0);
    if(categoryTotal > categoryTotalAccumulator) {
      largestCategoryIndex = categoryIndex;
      return categoryTotal;
    }
    return categoryTotalAccumulator;
  }, 0);

  const selectedCategory = response.data.categories[largestCategoryIndex];
  const selectedInstrument = selectedCategory.items[largestItemIndexes[largestCategoryIndex]];

  const instrumentExpenseRatio = selectedInstrument.expenseRatio;
  const categoryExpenseRatio = selectedCategory.expenseRatio;
  const aum = selectedInstrument.AUM;

  const expenseRatioObj = new UvNumberPojo({
    config: {
      class: (instrumentExpenseRatio < categoryExpenseRatio) ? 'uv-color-success' : 'uv-color-danger'
    },
    data: {
      title: instrumentExpenseRatio,
      label: 'Expense Ratio',
      subtitle: 'Category Average: ' + categoryExpenseRatio
    }
  }).numberData;

  const aumObj = new UvNumberPojo({
    data: {
      title: aum,
      subtitle: 'Crore',
      label: 'AUM',
    }
  }).numberData;

  const uvNumbers: UvNumberProps[] = [expenseRatioObj, aumObj]

  let dashboardData = {
    uvNumbers: uvNumbers
  };
  yield put(updateDashboard(dashboardData));
}

export function* UvDashboardSaga() {
  yield takeEvery(UV_DASHBOARD.LOAD, loadDashboard);
}

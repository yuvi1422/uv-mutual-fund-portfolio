import UV_BAR_CHART from "../../components/uv_bar-chart/uv_bar-chart.constants";
import UV_PIE from "../../components/uv_pie/uv_pie.constants";
import UVAction from "../../uv_interface.action";
import UVItem from "../../uv_interface.item";
import UV_DASHBOARD from "./uv_dashboard.constants";
import { UvNumberProps } from './../../shared/Types';

const initialState = {
  categoryData: {
    selectionIndex: 0,
    categories: [   // Check object structure in dashboard Saga Load method to be in sync with this object.
      {
        config: {},
        selectionIndex: 0,
        items: [] as UVItem[]
      }
    ]
  },
  pieCharts: [
    {
      config: null,
      data: {
        selectionIndex: 0,
        categories: []
      }
    }
  ],
  barCharts: [
    {
      config: null,
      data:  [] as UVItem[]
    }
  ],
  angularGauages: [
    {
      config: null,
      data: {
        score: 0,
        items: []
      }
    }
  ],
  numbers: [] as UvNumberProps []
};

const UvDashboardReducer = (state = initialState, action: UVAction)=> {
  let tmpBarCharts, tmpAngularGuages, selectedBarChart;
  switch(action.type) {
    case UV_DASHBOARD.LOAD:
      return {
        ...state,
        categoryData: action.data.categoryData,
        pieCharts: action.data.pieCharts,
        barCharts: action.data.barCharts,
        angularGauages: action.data.angularGauages,
        numbers: action.data.uvNumbers
      }

    case UV_PIE.SELECT:
      state.categoryData.selectionIndex = action.data.sliceIndex;
      tmpBarCharts = state.barCharts;
      tmpBarCharts[action.config.componentId].data = state.categoryData.categories[action.data.sliceIndex].items;
      return {
        ...state,
        barCharts: [...tmpBarCharts]
      };

    case UV_BAR_CHART.SELECT:
      tmpAngularGuages = state.angularGauages;
      state.categoryData.categories[state.categoryData.selectionIndex].selectionIndex = action.data.columnIndex;
      selectedBarChart =  state.categoryData.categories[state.categoryData.selectionIndex].items[action.data.columnIndex];
      state.angularGauages[action.config.componentId].data.score = selectedBarChart.rating;
      state.numbers[0].data.title = selectedBarChart.expenseRatio;
      state.numbers[1].data.title = selectedBarChart.AUM;
      return {
        ...state,
        angularGauages: [...tmpAngularGuages]
      };

    default:
      return state;
  }
};

export default UvDashboardReducer;

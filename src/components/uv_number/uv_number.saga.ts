import { takeEvery } from "redux-saga/effects";
import UV_NUMBER from "./uv_number.constants";


function* loadUvNumber() {
  console.log('UV Number loaded');
  yield UV_NUMBER.LOAD;
}

export function* UvNumberSaga() {
  yield takeEvery(UV_NUMBER.LOAD, loadUvNumber);
}

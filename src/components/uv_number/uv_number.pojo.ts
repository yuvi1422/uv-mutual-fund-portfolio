import { UvNumberProps } from "../../shared/Types";

export default class UvNumberPojo {

  private _numberData: UvNumberProps;

  constructor(numberData: UvNumberProps) {
    this._numberData = {
      config: {
        class: (numberData.config && numberData.config.class) ? numberData.config.class : '',
        title: {
          class: (numberData.config && numberData.config.title && numberData.config.title.class) ?
                    numberData.config.title.class : '',
        },
        subtitle: {
          class: (numberData.config && numberData.config.subtitle && numberData.config.subtitle.class) ?
                    numberData.config.subtitle.class : '',
        }
      },
      data: {
        title: numberData.data.title,
        subtitle: numberData.data.subtitle ? numberData.data.subtitle : '',
        label: numberData.data.label ? numberData.data.label : ''
      }
    }
  }

  get numberData() {
    return this._numberData;
  }
}
import React from 'react';

import './uv_number.css';
import { useSelector } from 'react-redux';
import { UVRootState } from '../root.reducer';

function UvNumber() {

  // TODO: Resolve issue of calling 3 times.
  let config = useSelector((state: UVRootState) => {
    return state.number.config;
  });

  let data = useSelector((state: UVRootState) => {
    return state.number.data;
  });

  return (
    <div className = {'uv-number-container ' + config.class}>
      <div className={'bounce-top uv-primary-text uv-text-center align-middle ' + config.title.class}>
        {data.title}
      </div>
      <div className={'bounce-top uv-secondary-text uv-text-center ' + config.subtitle.class}>
          {data.subtitle}
      </div>
    </div>
  )
}

export default UvNumber;

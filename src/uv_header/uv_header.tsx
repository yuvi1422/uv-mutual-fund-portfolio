import React from 'react';
import { useSelector } from 'react-redux';

import './uv_header.css';
import { UVRootState } from '../root.reducer';

function UvHeader() {

  let headerData = useSelector((state: UVRootState) => {
    return state.header.data;
  });

  return (
    <div className="uv-header-container">
      <div id="headerDiv">
        <div className= {'toolbar ' + (headerData.theme ? headerData.theme : 'primary')} role="banner">
          <img width={headerData.logo.width} alt={headerData.alt} src={headerData.logo.logo}/>
          <span>{headerData.title}</span>
          <div className="spacer"></div>
          <a href={headerData.repository.url} target="_blank" rel="noopener noreferrer">
            <img className="logo" alt={headerData.alt} height={headerData.repository.height}
                 src={headerData.repository.logo}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UvHeader;

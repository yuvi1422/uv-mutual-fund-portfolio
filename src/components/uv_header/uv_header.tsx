import React, { memo } from 'react';

import './uv_header.css';
import { UVHeaderProps } from '../../shared/Types';

function UVHeader(props: UVHeaderProps) {

  return (
    <div className="uv-header-container">
      <div id="headerDiv">
        <div className= {'toolbar ' + (props.data.theme ? props.data.theme : 'primary')} role="banner">
          <a href={props.data.primaryWebsite} target="_blank" rel="noopener noreferrer">
            <img width={props.data.logo && props.data.logo.width}
                 alt={props.data.alt}
                 src={props.data.logo && props.data.logo.logo}/>
          </a>
          <span>{props.data.title}</span>
          <div className="spacer"></div>
          <a href={props.data.repository && props.data.repository.url} target="_blank" rel="noopener noreferrer">
            <img className="logo" alt={props.data.alt}
                 height={props.data.repository && props.data.repository.height}
                 src={props.data.repository && props.data.repository.logo}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(UVHeader);

import * as React from 'react';
import data from './Data1';

function ControlPanel(props) {
  return (
    <div className="control-panel">
    

      {data.filter(city => city.ofc_zone === 'NORTH BIHAR RURAL').map((city, index) => (
        <div key={`btn-${index}`} className="input">
          <input
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.ofc_subdivision === 'MADHUBANI'}
            onClick={() => props.onSelectCity(city)}
          />
          <label htmlFor={`city-${index}`}>{city.ofc_subdivision}</label>
        </div>
      ))}
    </div>
  );
}

export default React.memo(ControlPanel);
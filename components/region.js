import React from 'react';
import City from './city.js';

export default function Region({region}) {
  console.log(region.cities);
  return (
    <div>
      Region Name: {region.regionName}
      <br/>{
        region.regionDetails[0].Geography.map((each) => {
          return (<div key={each.q}>
                    <br/>
                    <div className="displayQuestion">{each.Q}</div>
                    <div className="displayAnswer">{each.A}</div>
                  </div>)
        })}
      <br/>{
        region.cities.map((each) => {
          return <div className="eachCity" key={each.cityName}>
                    <City
                    city={each}
                      />
                  </div>
        })
      }
    </div>
  )
}
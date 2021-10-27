import React from 'react';
import Region from './region.js';

export default function World({world}) {
  return (
    <div>
      {world.worldName}
      <br/>
      {world.regions.map((each) => {
        return <div className="singleRegion" key={each.regionName}>
                  <Region
                    region={each}
                  />
              </div>
      })

      }
    </div>
  )
}
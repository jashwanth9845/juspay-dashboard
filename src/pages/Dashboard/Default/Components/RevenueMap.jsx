import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";
import style from "../css/RevenueMap.module.css";
import geoUrl from "../../../../utils/map.json";

const RevenueMap = ({ locations }) => {
  const maxRevenue = Math.max(...locations.map((loc) => loc.revenue));
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={style?.revenueContainer}
    >
      <h3 className={`${style?.revenueHeading} semibold-14`}>
        Revenue by Location
      </h3>
      <div className={style?.revenueMap}>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>

          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={20} className="marker-map" />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className={style?.revenueMapData}>
        {locations.map((location) => (
          <div className={style?.revenueMapDataDiv} key={location.name}>
            <div className={style?.revenueLocationData}>
              <div className={`regular-12 ${style?.revenueLocationName}`}>
                {location.name}
              </div>
              <div className={`regular-12 ${style?.revenueLocationRevenue}`}>
                {location.revenue}K
              </div>
            </div>
            <div className={style?.revenueProgress}>
              <div
                className={style?.revenueProgressDiv}
                style={{
                  width: `${(location.revenue / maxRevenue) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RevenueMap;

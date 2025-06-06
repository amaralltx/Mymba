// src/features/occurrence-map/OccurrenceMapFeature.js
// import React, { useState, useEffect } from "react";
// import { useOccurrenceData } from "./hooks/useOccurrenceData.jsx";
import OccurrenceMap from "./components/OccurrenceMap.jsx";
// import { getRandomAnimalTaxonKey } from "./api/gbifApi.js";

function OccurrenceMapFeature() {
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h1>Occurrence Map Feature</h1>
      <OccurrenceMap />
    </div>
  );
}

export default OccurrenceMapFeature;
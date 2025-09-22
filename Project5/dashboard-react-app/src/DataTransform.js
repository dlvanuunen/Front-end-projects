  //  Formatting for display
   const formulaFMap = {
    PM25: "PM2.5",
    PM10: "PM10",
    O3: "O₃",
    NO2: "NO₂",
    CO2: "CO₂",
    SO2: "SO₂",
    PS: "PS",
  };
  
  export function formatF(formula) {
    return formulaFMap[formula] ?? formula; // fallback to original
  }







export function filterByCompound(data, compound) {
  if (!Array.isArray(data) || !compound) {
    return null;
  }
  return data.filter(item => item.formula === compound);
}

export function latestByCompound(data) {
  const latestByFormula = data.reduce(
    (latest, item) => {
      const previous = latest[item.formula];

      if (
        !previous ||
        new Date(item.timestamp_measured) >
          new Date(previous.timestamp_measured)
      ) {
        latest[item.formula] = item;
      }
      return latest;
    },

    {}
  );
   console.log("latest", latestByFormula)
   return latestByFormula
}



export function availableCompounds(latest){
const formulas=  latest.map( item => item.formula)
  return [...new Set(formulas)]; // removes duplicates
}







export function topByPriority(data, priorityList, n=3){

  const result = [];

  for (const formula of priorityList) {
    if (data[formula]) {
      result.push(data[formula]);
      if (result.length === n) break;
    }
  }

  return result;
}

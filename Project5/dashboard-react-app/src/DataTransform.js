export function filterByCompound(data, compound) {
  return data.filter(item.formula === compound);
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

import * as queryString from 'query-string';

export function paramString(searchQuery, appliedFilters) {
  let filterParams = queryString.stringify(appliedFilters, {arrayFormat: 'comma'})
  return `&q=${searchQuery}&${filterParams}`
}


export function getAppliedFilters(query_string) {
  // console.log(query_string);
  let {q, ...categories} = queryString.parse(query_string);

  let appliedFilters = {};

  if (Object.keys(categories).toString() !== "") {
    Object.entries(categories).forEach(
      ([key, value]) => (
        appliedFilters[key] = value.split(',')
      )
    )  
  }
  // console.log(appliedFilters);
  return appliedFilters; /* Returns an object containing key/array pairs */
}

export function updateFilters(event, query_string) {
  let appliedFilters = getAppliedFilters(query_string);

  const { name, value } = event.target;
  // console.log(value);

  if ((appliedFilters[name]) && (appliedFilters[name].includes(value))) {
    appliedFilters[name] = appliedFilters[name].filter(el => el !== value)
  } else if (appliedFilters[name]) {
    appliedFilters[name].push(value)
  } else {
    appliedFilters[name] = [value]

  }
  // console.log(appliedFilters)
  return appliedFilters
} /* Returns new appliedFilters */

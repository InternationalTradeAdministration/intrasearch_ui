import * as queryString from 'query-string';

export function getAppliedFilters(query_string) {
  let {q, ...categories} = queryString.parse(query_string);
  let appliedFilters = {};

  if (Object.keys(categories).toString() !== "") {
    Object.entries(categories).forEach(
      ([key, value]) => (
        appliedFilters[key] = value.split(',')
      )
    )  
  }
  return appliedFilters; /* Returns an object containing key/array pairs */
}

export function updateFilters(category, value, query_string) {
  let appliedFilters = getAppliedFilters(query_string);

  if ((appliedFilters[category]) && (appliedFilters[category].includes(value))) {
    /* The category of the checked box already includes this value, want to remove it */
    appliedFilters[category] = appliedFilters[category].filter(el => el !== value)
  } else if (appliedFilters[category]) {
    /* The category exists in the object, want to add the value to its array */
    appliedFilters[category].push(value)
  } else {
    /* Initialize the category's array in the object using the checked box's value */
    appliedFilters[category] = [value]
  }

  /* Remove categories that are now empty */
  if (appliedFilters[category].length === 0) {
    delete appliedFilters[category]
  }
  return appliedFilters
} /* Returns new appliedFilters */

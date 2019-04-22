export const selectLocation = function(city, jobs) {
  return {
    type: "SWITCH_LOCATION",
    city,
    jobs
  };
};

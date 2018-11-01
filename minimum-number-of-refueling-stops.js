var minRefuelStops = function(target, startFuel, stations) {
  if (startFuel >= target) return 0;
  if (startFuel < stations[0][0]) return -1;

  const stops = checkStations(target, startFuel, stations);
  return stops === -Infinity ? -1 : stops;
};

const checkStations = (target, startFuel, stations) => {
  var accessibleStations = [];

  if (startFuel >= target) return 0;
  if (startFuel < stations[0][0]) return -Infinity;

  for (var i = 0; i < stations.length; i++) {
    if (startFuel + stations[i][1] >= target) {
      accessibleStations = stations;
      break;
    }
    if (startFuel < stations[i][0]) {
      accessibleStations = stations.splice(0, i);
      break;
    }
  }

  if (accessibleStations.length === 0) return -Infinity;

  const bestStation = findBestStation(accessibleStations);
  const newStartFuel = startFuel + bestStation[1];

  return 1 + checkStations(target, newStartFuel, stations);
};

const findBestStation = (stations) => {
  const reducer = (max, station) => {
    return max[1] > station[1] ? max : station;
  };
  return stations.reduce(reducer);
};

console.log(
  minRefuelStops(1000, 299, [
    [13, 21],
    [26, 115],
    [100, 47],
    [225, 99],
    [299, 141],
    [444, 198],
    [608, 190],
    [636, 157],
    [647, 255],
    [841, 123]
  ])
);
// console.log(minRefuelStops(100, 50, [[30, 60], [40, 60], [50, 60], [60, 70]]));
// console.log(minRefuelStops(100, 50, [[30, 40], [40, 40], [50, 40], [60, 10], [65, 0]]));
// console.log(minRefuelStops(100, 50, [[30, 10], [40, 10], [50, 10], [65, 10]]));
// console.log(minRefuelStops(100, 50, [[30, 40], [40, 40], [50, 40], [60, 0]]));
// console.log(minRefuelStops(100, 0, [[30, 60], [40, 60], [50, 60], [60, 70]]));
// console.log(minRefuelStops(100, 100, [[30, 60], [40, 60], [50, 60], [60, 70]]));

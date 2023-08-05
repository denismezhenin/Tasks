import { Point } from 'types/types';

// I use something that are close to Binary search to reduce number
// of function calls, and mostly it find solution in 7-8 attempt, it divide in twice on every iteration
// and compare with random point coordinate

export const findPoint = () => {
  const point = generateRandomPoint();
  const maxCoordinateValue = 100;
  let calls = 0;
  const search_points: Point[] = [];

  let [xMin, yMin, zMin] = [0, 0, 0];
  let [xMax, yMax, zMax] = [
    maxCoordinateValue,
    maxCoordinateValue,
    maxCoordinateValue,
  ];

  while (true) {
    const x = Math.floor((xMin + xMax) / 2);
    const y = Math.floor((yMin + yMax) / 2);
    const z = Math.floor((zMin + zMax) / 2);

    const currentPoint: Point = { x, y, z };
    const distance = calculateDistance(currentPoint, point);
    calls++;
    search_points.push(currentPoint);

    if (distance === 0) {
      break;
    }
    if (point.x <= x) {
      xMax = x;
    } else {
      xMin = x + 1;
    }

    if (point.y <= y) {
      yMax = y;
    } else {
      yMin = y + 1;
    }

    if (point.z <= z) {
      zMax = z;
    } else {
      zMin = z + 1;
    }
  }
  const res = {
    result: {
      random_point: point,
      search_points,
      calls: calls,
    },
  };
  return JSON.stringify(res);
};

const generateRandomPoint = () => {
  const x = Math.round(Math.random() * 100);
  const y = Math.round(Math.random() * 100);
  const z = Math.round(Math.random() * 100);
  return { x, y, z };
};

function calculateDistance(point1: Point, point2: Point): number {
  const distanceX = point1.x - point2.x;
  const distanceY = point1.y - point2.y;
  const distanceZ = point1.z - point2.z;
  return Math.sqrt(distanceX ** 2 + distanceY ** 2 + distanceZ ** 2);
}

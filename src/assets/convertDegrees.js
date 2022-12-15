export const convertDegrees = degrees => {
  const deg = ((degrees - 32) * (5 / 9)).toFixed(2);
  return deg;
};

const random = (min, max) => {
  // return Math.floor(Math.random() * ((max + 1) - min) + min);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export default random;
/**
 * Pass in a max limit integer and will return a number less then or equal to max limit.
 * @param (integer) max limit.
 * @return (integer) a number equal to or less than arg but never less than 0.
 */
const randomNumberGenerator = (limit) => {
  return Math.floor(Math.random() * (limit + 0.99));
}

module.exports = randomNumberGenerator;
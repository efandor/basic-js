module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  let sampleActivityNumber = parseFloat(sampleActivity)
  
    if (typeof(sampleActivity) !== "string" || isNaN(sampleActivityNumber) || sampleActivityNumber <= 0) {
      return false;
    } else return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / 0.693 / HALF_LIFE_PERIOD);
};

// константа скорости реакции k
// Начальная скорость распада MODERN_ACTIVITY
// Конечная скорость распада sampleActivity
// Период полураспада HALF_LIFE_PERIOD = 0.693 / k        =====> k = 0.693 / HALF_LIFE_PERIOD
// Возраст археологических находок находится по формуле 
// T = log(Начальная скорость распада / Конечная скорость распада) / константа скорости реакции
//      log(MODERN_ACTIVITY / sampleActivityNumber) / k

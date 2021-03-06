'use strict';

// Write a function to convert between degrees
// Celsius, Fahrenheit and Kelvin.
//
// Example values:
//   value = 10
//   from = 'F'
//   to = 'C'
//
// Return the result of conversion.

// Converting °C <-> °F using formulas:

// T[°C] = (T[°F] - 32) × 5 / 9
const f2c = value => (value - 32) * 5 / 9;

// T[°F] = T[°C] × 9 / 5 + 32
const c2f = value => value * 9 / 5 + 32;

// Converting °C <-> K using formulas:

// T[°C] = T[K] - 273.15
const k2c = value => value - 273.15;

// T[K] = T[°C] + 273.15
const c2k = value => value + 273.15;

// Converting °F <-> K indirectly using existing functions:

// T[K] -> T[°C] -> T[°F]
const k2f = value => c2f(k2c(value));

// T[°F] -> T[°C] -> T[K]
const f2k = value => c2k(f2c(value));

// General function to covert between any units:
const temperature = (value, from, to) => {
  if (from === to) {
    return value;
  }
  if (from === 'C' && to === 'F') {
    return c2f(value);
  }
  if (from === 'F' && to === 'C') {
    return f2c(value);
  }
  if (from === 'C' && to === 'K') {
    return c2k(value);
  }
  if (from === 'K' && to === 'C') {
    return k2c(value);
  }
  if (from === 'F' && to === 'K') {
    return f2k(value);
  }
  if (from === 'K' && to === 'F') {
    return k2f(value);
  }
  return undefined;
};

module.exports = {
  temperature,
};

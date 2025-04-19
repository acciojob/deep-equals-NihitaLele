function deepEquals(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return isNaN(a) && isNaN(b);
  }

  if (typeof a !== typeof b || a === null || b === null) {
    return false;
  }

]  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) return false;
    }
    return true;
  }

  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!b.hasOwnProperty(key)) return false;
      if (!deepEquals(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
}

module.exports = deepEquals;

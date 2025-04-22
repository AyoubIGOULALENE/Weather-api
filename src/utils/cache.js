const cache = new Map();

const getCache = async (key) => {
  const cached = cache.get(key);
  if (!cached) return null;

  const { value, expiry } = cached;
  if (Date.now() > expiry) {
    cache.delete(key);
    return null;
  }

  return value;
};

const setCache = async (key, value) => {
  const expiry = Date.now() + 600_000;
  cache.set(key, { value, expiry });
};

module.exports = { getCache, setCache };

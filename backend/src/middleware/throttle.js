const throttleMap = new Map();
const THROTTLE_MS = 3000;

module.exports = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (throttleMap.has(ip)) {
    const last = throttleMap.get(ip);
    if (now - last < THROTTLE_MS) {
      return res.status(429).json({ message: 'Too many requests, please wait a moment.' });
    }
  }

  throttleMap.set(ip, now);
  next();
};

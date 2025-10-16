const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Unauthenticated, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authenticated, no token" });
  }
};

module.exports = { protect };

import jwt from "jsonwebtoken";

function cookieCleaner(req, res, next) {
  if (req.cookies.jwt) {
    res.clearCookie("jwt");
    res.end();
  }
  next();
}

export default cookieCleaner;

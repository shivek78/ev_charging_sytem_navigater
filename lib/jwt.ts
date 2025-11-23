import jwt from "jsonwebtoken";
export function signJwt(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "7d" });
}
export function verifyJwt(token: string) {
  return new Promise((resolve, reject) => jwt.verify(token, process.env.JWT_SECRET!, (err, payload) => err ? reject(err) : resolve(payload)));
}

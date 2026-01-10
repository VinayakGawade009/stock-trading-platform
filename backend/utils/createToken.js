import jwt from "jsonwebtoken";

export const createToken = (id) => {
  if (!process.env.TOKEN_KEY) {
    throw new Error("TOKEN_KEY environment variable is not set");
  }
  return jwt.sign(
    { id },
    process.env.TOKEN_KEY,
    {
      expiresIn: "3d", // same as 3 * 24 * 60 * 60
    }
  );
};

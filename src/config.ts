import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const  dbUrl = process.env.DATABASE_URL;
export const secret = process.env.JWT_SECRET ||"";
export const name = process.env.npm_package_name ||"";
export const version = process.env.npm_package_version ||"";

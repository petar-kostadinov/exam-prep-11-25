import { AUTH_COOKIE_NAME } from "../config/index";

export function auth(req, res, next) {
    const token = req.cookies[AUTH_COOKIE_NAME];

    if (!token) {
        return next();
    }
}
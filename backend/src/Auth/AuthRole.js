import STATUSCODE from "../utils/statuscode";


// Middleware Function  to Authenticate Users and priviledges

export const AuthRole = (Role) => {
    return (req, res, next) => {
        if (req.User.Role !== Role.Admin) {
            res.status(STATUSCODE.FORBIDDEN).json({ message: "You are NOT  allowed to access this" })
        }
        next()
    }
}



import {User} from "../entity/User";
import jwt from "jsonwebtoken";

export const generateToken = async (user: User) => {
    const payload = {
        id: user.id,
        email: user.email
    }


};
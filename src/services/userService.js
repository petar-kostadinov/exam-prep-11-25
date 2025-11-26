import User from "../models/User.js";

export default {
    register(userData) {

        if (userData.password !== userData.repass) {
            throw new Error('Password Missmatch!');
        };

        
        return User.create(userData);
    },
}
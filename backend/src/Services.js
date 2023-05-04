// import { object } from 'yup';
const bcrypt = require('bcrypt');

//  Login validation 
export const UserEmailExist = async email => {

    const emailUser = await user.findOne({ email })
    return emailUser ? true : false
}

// compare hash password & database password
export const CompareHash = async (Userpassword) => async (LoginPassword) => {
    await bcrypt.compare(Userpassword, LoginPassword)

}
//check if userEmail exist in database

export const ValidateUserEmail = async email => {
    await user.findOne({ email });
    return user ? false : true;
}

// check if username exist in database
export const ValidateUserName = async username => {
    user.findOne({ username });
    return user ? false : true;
}

// hash user password
export const Hash = async object => async item => {
    await bcrypt.hash(object, item)
} 

const  bcrypt = require ('bcrypt');
const SaltRounds = 10;


let RandomNumber;
RandomNumber = 865457;

const generateToken = () => {
    return Math.floor(Math.random() * RandomNumber);

}


// icrease level of  encrpytion for token

export const encryptToken = () => {
      const token = (generateToken(), SaltRounds)
};





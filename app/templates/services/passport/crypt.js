import bcrypt from 'bcrypt';

const generateHash = password => bcrypt.hash(password, bcrypt.genSaltSync(10));

const validatePassword = (password, hash) => bcrypt.compare(password, hash);

export {
    generateHash,
    validatePassword
};

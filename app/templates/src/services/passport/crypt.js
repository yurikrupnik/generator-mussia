import bcrypt from 'bcrypt';

function generateHash(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(10));
}

function validatePassword(password, hash) {
    return bcrypt.compare(password, hash);
}


export {
    generateHash,
    validatePassword
}
const BaseSQLModel = require('./base');

class UserModel extends BaseSQLModel {
    constructor() {
        super('users');
    }

    async findOne(username) {
        const result = await super.findOne('username', username);
        return result;
    }

    async findById(id) {
        const result = await super.findById(id);
        return result;
    }
}

module.exports = UserModel;
'use strict';
class RequestHelper {
    constructor() {

    }

    /**
     * Wrapper for joi validation
     * @param {object} schema
     * @param {object} value
     * @param {object} options
     */
    schemaValidationWrapper(schema, value, options) {
        const valid = schema.validate(value, options);
        if (valid.error) throw valid.error;
        return valid;
    }
}

module.exports = new RequestHelper();
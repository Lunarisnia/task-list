"use strict";

class CustomError extends Error {
    get statusCode() {
        return this._statusCode;
    }

    get errId() {
        return this._statusCode;
    }

    constructor(message) {
        super(message);
        this._statusCode = 0;
        this._errId = 0;
    }
}

class InternalError extends CustomError {
    constructor(message) {
        super(message);
        this.name = "InternalError";
        this._statusCode = 500;
        this._errId = 1001;
    }
}

class ResourceNotFoundError extends CustomError {
    constructor(message) {
        super(message);
        this.name = "ResourceNotFoundError";
        this._statusCode = 404;
        this._errId = 1002;
    }
}

class UnauthorizedAccessError extends CustomError {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedAccessError";
        this._statusCode = 401;
        this._errId = 1003;
    }
}

module.exports = {
    InternalError,
    ResourceNotFoundError,
    UnauthorizedAccessError
}
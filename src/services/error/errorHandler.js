'use strict';

const errHandler = (err, _req, res, _next) => {
    const { name, message, statusCode, errId } = err;

    const statusLog = `[Core][Error] ${_req.method} ${_req.url} ${JSON.stringify(
        err,
    )}`;
    console.error(statusLog);

    switch (name) {
        default:
            return res
                .status(statusCode || 500)
                .json(
                    errorFormatter(
                        errId || 1001,
                        name || 'InternalError',
                        message || 'Internal Server Error',
                    ),
                );
    }
};

const errorFormatter = (id, name, message) => ({
    error: { id, name, message },
});

const wrap = (fn) => (...args) => {
    fn(...args)
        .catch((err) => {
            args[2](err);
        });
};

module.exports = { errHandler, wrap };
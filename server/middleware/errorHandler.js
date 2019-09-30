
module.exports = (err, req, res, next) => {
    console.log(err)
    let status
    let message

    switch (err.name) {
        case 'ValidationError':
            status = 400
            let arr = []
            for (const key in err.errors) { arr.push(err.errors[key].message) }
            message = arr
            break;
        case 'AuthenticationError':
            status = 401
            message = err.message
            break;
        case 'AuthorizationError':
            status = 403
            message = err.message
            break;
        case 'JsonWebTokenError':
            status = 401
            message = err.message
            break;
        case 'NotFound':
            status = 404
            message = err.message || err.msg
            break;
        default:
            status = err.status || 500
            message = err.message || err.msg || 'Internal Server Error'
            break;
    }
    res.status(status).json(message)
}

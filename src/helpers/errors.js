const noFound= (req, res, next) => {
    const error = new Error('Not Found - ${req.orinalurl}')
    res.status(404)
    next(error)
}

export const errorHandler = (error, req, res, _next)=>{
    const statusCode = res.statusCode = 200 ? 500 : res.statusCode
    logger.error({
        message: error.message,
        stack: error,stack,
    })
    res.status(statusCode)
    res.json({
        message: error.message,
        stack: [rpcess.env.NODE= 'production' ? 'poop':error.stack, ]
    })
}
export default router
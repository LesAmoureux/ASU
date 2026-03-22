// A simple logger middleware function
const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    
    // next() is essential to pass control to the next middleware or route
    next(); 
};

module.exports = loggerMiddleware;
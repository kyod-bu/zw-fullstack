class Developer {
    methodMissing(method, ...args) {
        this[method] =
            this[method] ||
            function (...args2) {
                if (method === "frontend") {
                    console.log("I am", "a good", method, "developer", ...args2);
                } else {
                    console.log("I am", method, "developer", ...args2);
                }
            };
        this[method](...args);
    }
}

module.exports = {
    Developer,
};

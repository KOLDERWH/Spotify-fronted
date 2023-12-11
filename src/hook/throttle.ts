const throttle = function (func:Function, delay:number) {
    let prev = Date.now();
    return function () {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}

export default throttle
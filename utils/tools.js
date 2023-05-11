// 防抖
export function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// 节流
export function throttle(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                timeoutId = null;
                func.apply(this, args);
            }, delay);
        }
    };
}
// 转换日期
export function transformTime(time) {
    let date = new Date(time * 1000); // 接口时间戳比较特殊
    let y = date.getFullYear();
    let m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return y + '-' + m + '-' + d;
}
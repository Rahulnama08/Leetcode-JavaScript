class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
    set(key, value, duration) {
        const alreadyExists = this.cache.get(key);
        const isUnexpired = alreadyExists !== undefined;
        if (isUnexpired) {
            clearTimeout(alreadyExists.timeoutId);
        }
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, { value, timeoutId });
        return isUnexpired;
    }
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }
    count() {
        return this.cache.size;
    }
}

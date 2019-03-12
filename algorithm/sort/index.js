import Comparator from "../util/compare";

export default class Sort {
    constructor(originalCallbacks){
        this.callbacks = Sort.initSortingCallBack(originalCallbacks);
        this.comparator = new Comparator(this.callbacks.compareCallback);
    }

    static initSortingCallBack(originalCallbacks) {
        const callbacks = originalCallbacks || {};
        const stubCallback = () => {};
        callbacks.compareCallback = callbacks.compareCallback ||undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;
        return callbacks;
    }
    sort() {
        throw new Error('sort methid must be implemented');
    }
}
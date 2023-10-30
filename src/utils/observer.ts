type AnyFunction<T = unknown> = (...args: T[]) => void;

export class Observable<TArgs = unknown> {
    observers: AnyFunction<TArgs>[];

    constructor() {
        this.observers = [];
    }

    subscribe(func: AnyFunction<TArgs>) {
        this.observers.push(func);
    }

    unsubscribe(inputFunc: AnyFunction) {
        this.observers.filter(func => func != inputFunc);
    }

    send(data: TArgs) {
        this.observers.forEach(func => func(data));
    }
}
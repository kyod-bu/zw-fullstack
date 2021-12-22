class Observable {
    static of(list) {
        // observer -> SubscriptionObserver
        return new Observable((observer) => {
            setTimeout(() => {
                for(const item of list) {
                    observer.next(item);
                }
            }, 0);
        });
    }

    static clickEvent(dom) {
        return new Observable((observer) => {
            dom.addEventListener("click", () => {
                observer.next();
            });
        });
    }

    // subscriber 订阅者
    constructor(subscriber) {
        this._subscriber = subscriber;
    }

    /**
     * 订阅
     *
     * observer 可能是：
     * (v) => console.log(v)
     *
     * observer 也可能是：
     * {
     *     next: () => console.log(v),
     *     complete: () => console.log('complete),
     * }
     */
    subscribe(observer) {
        if ("object" !== typeof observer || observer === null) {
            observer = {
                next: observer,
            };
        }

        return new Subscription(observer, this._subscriber);
    }
}

class Subscription {
    constructor(observer, subscriber) {
        this._observer = observer;

        const subscriptionObserver = new SubscriptionObserver(this);

        subscriber.call(null, subscriptionObserver);
    }
}

class SubscriptionObserver {
    constructor(subscription) {
        this._subscription = subscription;
    }

    next(value) {
        notify(this._subscription, "next", value);
    }
}

// 通知
function notify(subscription, type, ...args) {
    // { next: () => {} }
    if (subscription._observer[type]) {
        subscription._observer[type].apply(null, args);
    }
}

module.exports = {
    Observable,
};

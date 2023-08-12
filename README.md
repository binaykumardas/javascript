# Promise
- It is an object with data value in it.
- When promise object get the data then it will call the callback function and it will call it only once.
- fetch(); this an function given by the browser to do the api call.
- fetch() returns a promise.
- ** Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

# More about promise
- 1. Promise state and 2. Promise result
- promise state will tell us about the what is the state of the promise.
- Initially promise state will be in pending state.
- Promise result will give us the result of that promise.
- Promise Object are immutable.
- we will create promise by using new keyword.
- ex:- const promise = new Promise(function(resolve, reject) {});


# What are the state of a promise?
- 1.Pending
- 2.Fulfilled
- 3.Rejected

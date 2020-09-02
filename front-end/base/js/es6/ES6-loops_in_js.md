![](../../../../resource/loops.jpeg)

There are two key things you need to properly define when working with loops in JavaScript: `enumerable properties` and `iterable objects`.

## Enumerable properties

One defining characteristic of an enumerable object is that we set the internal enumerable flag to true when we assign a property to an object via the assignment operator. This is the default value.

However, we can change this behavior by setting it to false.

A rule of thumb is that an enumerable property always shows up in a `for … in` loop.

Let’s see this in action:

```
// shows up in a for .... in loop
const gbols = {};
gbols.platform = "LogRocket";

Object.getOwnPropertyDescriptor(gbols, "platform")
{value: "LogRocket", writable: true, enumerable: true, configurable: true}

// doesn't show up in a for .... in loop 
//to have more control of this properties  we use
Object.defineProperty(gbols, 'role', {value: 'Admin', writable: true, enumerable: false})

// Testing this out yeilds
for (const item in gbols) {
console.log(item)
}
 // logs platform
```

## Iterable objects

An object is iterable if it defines its iteration behavior. The value that will be looped over in a `for …of` construct, in this case, would define its iteration behavior. Built-in types that are iterable include `Arrays`, `Strings`, `Sets`, and `Maps` An `object` is not iterable because it does not specify an `@iterator method`.

Basically, in Javascript, all iterables are enumarables, but not all enumerables are iterables.

Here’s a way to conceptualize this: `for …in` looks for the object in the data, while `for ..of` looks for repetitive sequences.

Let’s see how this all looks when used with an `Array` data type:

```
 const authors = ['Jade', 'Dafe', 'Gbols', 'Daniel'];
// using with a for in loop
for (const author in authors) {
console.log(author)
}
// logs 0,1,2,3

for (const author of authors) {
console.log(author)
}
// logs Jade, Dafe, Gbols, Daniel
```

Something to keep in the back of your mind when using this constructs is that if `typeof` is called and the answer yields `object`, then you can use a `for …in` loop.

Let’s look at this operation on the author’s variable:

```
typeof authors
// logs "object" hence we can use a for ..in
```

This may seem surprising at first, but it’s important to note that arrays are a special kind of object with indexes as the key. Knowing that `for ...in` will look for an object in a construct can help us tremendously. When a `for ...in` loop finds an object, it will loop over each key.

We can visualize the way the `for ..in` loops over the author arrays as follows:

```
 const authors = {
0: 'Jade',
1: 'Dafe',
2: 'Gbols',
3: 'Daniel'
}
```

An important note: if it can be traced to an object (or inherits it from the object prototypal chain), `for …in` will iterate over the key in no particular order.

Meanwhile, if it implements an iterator `for.. of` construct, it will loop over the value in each iteration.

## The `ForEach` and `map` methods

While `forEach` and `map` methods can be used to achieve the same thing, there are differences in their behavior and peculiarities about their performance.

At the base level, they both receive a callback as an argument when the function is called.

Consider the following snippet:

```
const scoresEach = [2,4 ,8, 16, 32];
const scoresMap = [2,4 ,8, 16, 32];
const square = (num) => num * num;
```

Let’s itemize a few differences in their operation.

`forEach` returns `undefined`, while `map` returns a new `array`:

```
let newScores = []
const resultWithEach = scoresEach.forEach((score) => {
const newScore = square(score);
newScores.push(newScore);
});
const resultWithMap = scoresMap.map(square);

console.log(resultWithEach) // logs undefined
console.log(resultWithMap) // logs [4, 16, 64, 256, 1024]
```

`Map` is a pure function, while `forEach` performs some mutation:

```
console.log(newScores) // logs [4, 16, 64, 256, 1024]
```

In my opinion, `map` favors the functional programming paradigm. We don’t always have to perform a mutation to get back the desired result, unlike `forEach`, where we had to mutate the `newScores` variable. On each run, when provided with the same input, the `map` function will produce the same result. Meanwhile, the `forEach` counterpart will pick up from the previous value of the last mutation.

### Chaining

Chaining is possible with `map`, since the result returned is an `array`. Therefore, any other array method can be immediately called on the result. In other words, we can call `filter`, `reduce`, `some`, etc. This isn’t possible with `forEach`, as the value returned is undefined.

### Performance

The `map` method tends to perform better than the `forEach` method. You can use [JsPerf](https://jsperf.com/) to check the performance of an equivalent code block implemented with `map` and `forEach`. On average, you’ll see that the `map` function performs at least 50 percent faster.

NB: This benchmark depends on the machine you’re using, as well as your browser implementation.

## Conclusion

Of all the looping constructs discussed above, the one that gives us the most control is the `for..of` loop. We can use it with the keywords `return`, `continue`, and `break`. This means we can specify what we want to happen to each element in an `array`, and whether or not we want to leave early or skip.

With this information in mind, make sure to use the appropriate tool based on what you hope to achieve in your code.
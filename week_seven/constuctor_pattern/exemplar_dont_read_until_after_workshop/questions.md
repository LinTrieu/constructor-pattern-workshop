# Questions

## Question 1

The printed output doesn't change.  The case of function names in JavaScript has no effect on how they run.

## Question 2

The printed output doesn't change.  Putting an underscore at the beginning of a function name has no effect on the privacy of the function.  It is just a convention that JavaScript developers use to signal to other developers, "This function is considered private, use this at your own risk!"

## Question 3

An error is thrown: "TypeError: countModel.set is not a function".  This is because a constructor function implicitly returns a new object that has access to the functions defined on the constructor function's prototype.  The `return {}` stops that implicit return from happening, and makes the function explicitly return an empty object instead.  Because that empty object doesn't have the `set` function on it, an error is thrown.

## Question 4

It prints out `"count is 0"`.  Uncommenting the lines of code means that a new version of `set` is defined.  This new version of `set` runs instead of the old version.  This new version doesn't set `_count` to the passed value.  It just returns `"hello"`.  Why does the new version of `set` run instead of the old one? Is the old version of `set` still defined on `countModel` somehow? To answer these questions, have a look at the Pivotal blog resource in the README.

## Question 5

The solution is `console.log(countModel["__proto__"] === CountModel.prototype);`.  When a constructor function is used to create an object, it runs code that looks like this:

```
function Thing() {
  // these three lines are run automatically by JS because the `new`
  // keyword was used, even though they don't appear in your code:
  // var thing = {};
  // thing.__proto__ = Thing.prototype;
  // return thing;
};

Thing.prototype.setName = function(name) {
  this._name = name;
}

var thing = new Thing();
thing.setName("Isla");
```

What's cool is all three lines inside the constructor above happen automatically.

When `thing.setName("Isla")` is run, JavaScript finds out which `setName` to run.  It looks first on `thing` itself and finds nothing.  Then it looks on the object at `thing.__proto__`.  `thing.__proto__` points at the Thing.prototype object.  So JavaScript finds the `setName` function and runs it.  This is the essence of prototypal inheritance.

Imagine we change the code to this:

```
function Thing() {
  // these three lines are run automatically by JS because the `new`
  // keyword was used, even though they don't appear in your code:
  // var thing = {};
  // thing.__proto__ = Thing.prototype;
  // return thing;
};

Thing.prototype.setName = function(name) {
  this._name = name;
}

var thing = new Thing();

// we've added these three lines of code:
thing.setName = function(name) {
  return "WHATEVER you're not the boss of me";
};

thing.setName("Isla");
```

When the prototypal lookup happens, it first checks `thing` itself and immediately finds a `setName()` function.  This is the one it calls, so it never sees the one on `Thing.prototype`.

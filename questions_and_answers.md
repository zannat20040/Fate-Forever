
  <h1>MCQ TEST</h1>


###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`



#### Answer: B

Explaination: greetign is not defined anywhere


###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`


#### Answer: C

Explaination: We know that the, JavaScript performs automatic type conversion . So when I use the + operator between a number and a string. It converts the number 1 to a string and then concatenates it with the string "2", for which we get the output "12" in returns as a string, 



###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`


#### Answer: A

Explaination: Here, we are changing the info.favoriteFood property, not the food array itself. In JavaScript, when you assign a value to a property of an object, it doesn't affect the original array or value that was assigned to that property. so, food will be the same.


###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`



#### Answer: B

Explaination: In the sayHi function, you are expecting one argument, name, but when you call sayHi(), you don't pass any argument. In JavaScript, if you don't provide a value for a function parameter, it defaults to undefined.

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4


#### Answer: C

Explaination: Here, nums contains four elements. Then we use the forEach method to iterate over each element of the nums array, and for each element num, we are checking if it's truthy . Since the 0 is falsy , so the condition for 0 is false ,  and it's true for the other three elements (1, 2 and 3). So the increment will be happend for only (1,2 and 3)
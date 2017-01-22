# Four Funcs

my solution to [Mihai Bazon's](http://lisperator.net/blog/a-little-javascript-problem) little puzzle

sort of done it in 6 lines...depending on how long your line is and how long you name your variables yada yada yada

#### The problem
Define functions range, map, reverse and foreach, obeying the restrictions below, such that the following program works properly. It prints the squares of numbers from 1 to 10, in reverse order.

```javascript
var numbers = range(1, 10);
numbers = map(numbers, function (n) { return n * n });
numbers = reverse(numbers);
foreach(numbers, console.log);

/* output:

   100
   81
   64
   49
   36
   25
   16
   9
   4
   1
*/
```

#### Restrictions
* You must not use arrays. The square bracket characters, [ and ], are forbidden, as well as new Array.
* You must not use objects. The curly braces, { and }, and the dot character (.) are forbidden. You may use curly braces for code blocks, but not for creating JavaScript objects.
* Should go without saying, these functions must be generic and do what their name implies. They must not be hard-coded for the particular 1..10 example.



<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var i;
for (i = num1; i < num2; i++) {
    document.getElementById("demo").innerHTML += i + "<br>";
}
</script>

</body>
</html>

//Result
0 thru 9 // on new line

//Make the loop start counting downwards from 10 and stop at 1.
//The output should be 10 9 8 7 6 5 4 3 2 1 with line breaks.
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var i;
for (i = 10; i > 0; i--) {
    document.getElementById("demo").innerHTML += i + "<br>";
}
</script>

</body>
</html>

//Inside the for loop: 
// Set the counter variable (i) to 0. 
// Run the loop as long as i is less than the length of the food array. 
// Increment i by 1.
<html>
<body>

<p id="demo"></p>

<script>
var text = "";
var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
var i;

for (i = 0; i < food.length; i++) {
    text += "I love " + food[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>

</html>

Result:
I love Pizza
I love Beans
I love Tacos
I love Fish
I love Chicken

// In this exercise, you are going to create a for loop from scratch. 
// We have already created the counter variable i for you, and a text variable for output. 
// Your task is to create a FOR LOOP that output the numbers 1 3 5 7 9 with line breaks between each number. 
// WARNING: Remember to increase the variable used in the condition to avoid infinite loops (will crash your browser).
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var text = "";
var i;

for (i = 1; i < 10; i = i + 2) {
    text += i + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

Result:
1
3
5
7
9
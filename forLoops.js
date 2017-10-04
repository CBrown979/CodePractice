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
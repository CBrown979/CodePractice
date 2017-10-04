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
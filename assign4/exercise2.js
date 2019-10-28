function reverse(numberToReverse) {
  const numAsString = numberToReverse.toString();
  const reversedNumber = numAsString.split("").reverse().join("");
  console.log(reversedNumber);
}
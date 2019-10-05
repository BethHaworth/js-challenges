function palindrome(str) {
  var stri = str.toLowerCase();
  console.log(stri);

  var st = stri.replace(/[^0-9a-z]/gi, '');
  console.log(st);
  var str1 = st;

  //split
  var splitString = st.split("");
  console.log(splitString);

  //reverse
  var reverseString = splitString.reverse();
  console.log(reverseString);

  //join
  var str2 = reverseString.join("");
  console.log(str2);

  if (str1 === str2){
    return true; 
    } else {
    return false; 
      }
}

palindrome("race car");
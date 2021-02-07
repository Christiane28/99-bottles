var count = 99;

function sing() {

  while (count >= 1) {

    var bottleWord = "bottles";
    if (count === 1) {
      bottleWord = "bottle";
    }

    console.log(count + " " + bottleWord + " " + "of beer on the wall," + " " + count + " " + bottleWord + " " + "of beer. Take one down, pass it around," + " " + count + " " + bottleWord + " " + "of beer on the wall...");

    count--
  }

}

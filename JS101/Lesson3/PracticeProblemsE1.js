let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty("Spot"));


{
  let munstersDescription = "the Munsters are CREEPY and Spooky.";
  // => The munsters are creepy and spooky.

  function sentenceCase(string) {
    let lower = string.toLowerCase();

    return (lower.charAt(0).toUpperCase() + lower.slice(1,lower.length));
  }

  console.log(sentenceCase(munstersDescription));
}


{
  let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
  let additionalAges = { Marilyn: 22, Spot: 237 };

  Object.assign(ages,additionalAges);

  console.log(ages);
}

{
  let str1 = "Few things in life are as important as house training your pet dinosaur.";
  let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

  console.log(str1.includes('Dino'));
  console.log(str2.includes('Dino'));
}

{
  let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

  flintstones.push('Dino');

  console.log(flintstones);
}

{
  let advice = "Few things in life are as important as house training your pet dinosaur.";

  let newSentence = advice.substring(0,advice.indexOf('house'));

  console.log(newSentence);
}

{
  let i = 1;

  for (i = 0; i < 10; i += 1) {
    console.log(i);
  }

}

{
  let i = 1;

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

console.log(i);

}


{
  function addFive(num) {
    sum = num
    return num;
  }

  console.log(sum); // 10
  let num = addFive(10);
  console.log(num); // 10

}


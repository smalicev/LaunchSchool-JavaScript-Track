{
/*
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
10 times, 1 space after each line

*/

function tenFlintstones() {
  let tenLines = "";
  for (i = 0 ; i < 10 ; i += 1) {
    tenLines += " ".repeat(i) + "The Flintstones Rock!\n"
  }
  return tenLines;
}

console.log(tenFlintstones());


}

{

  let munstersDescription = "The Munsters are creepy and spooky.";

  function caseSwap (string) {
    let caseSwapped = '';

    for (i = 0; i < string.length; i += 1) {
      
      if (string.charAt(i) !== string.charAt(i).toUpperCase()) {

        caseSwapped = caseSwapped + string.charAt(i).toUpperCase();

      } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {

        caseSwapped = caseSwapped + string.charAt(i).toLowerCase();

      }
    }

    return caseSwapped;
  }

  console.log(caseSwap(munstersDescription));
}

{

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).pop();
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

console.log(munsters);

}
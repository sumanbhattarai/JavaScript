/*

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2.

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing info about whether Mark has a higher BMI than John.
4. Print  a string to the console containingt the variable from step 3 .

*/

        var markMass = prompt('Enter Mark\'s mass: ') ;
        var markHeight = prompt('Enter Mark\'s Height') ;
        var johnMass = prompt('Enter John\'s mass: ') ;
        var johnHeight = prompt('Enter john\'s height') ;

        var markBIM = markMass / (markHeight*markHeight) ;
        var johnBIM = johnMass / (johnHeight*johnHeight) ;

        var result = markBIM>johnBIM ;
        console.log("Is Mark\'s BIM higher than John\'s ?" + result);
   
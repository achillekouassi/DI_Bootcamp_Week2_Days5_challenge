/*
Have you heard the infamous song “99 Bottles of Beer?”
In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

==============================
Example
==============================

99 bottles of beer on the wall
99 bottles of beer
Take 1 down, pass it around
98 bottles of beer on the wall

98 bottles of beer on the wall
98 bottles of beer
Take 2 down, pass them around
96 bottles of beer on the wall

96 bottles of beer on the wall
96 bottles of beer
Take 3 down, pass them around
93 bottles of beer on the wall

ect …

==============================



Prompt the user for a number to begin counting down bottles.

In the song, everytime a bottle drops,
the subtracted number should go up by 1.
For example,

    We start the song at 99 bottles
    -> Take _1_ down, pass it around
    -> we have now 98 bottles

    -> then, Take _2_ down, pass them around
    -> we have now 96 bottles

    -> then, Take _3_ down, pass them around
    -> we have now 93 bottles

    ... ect


3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


4. Note : Make sure you get the grammar correct.

For 1 bottle, you pass “it” around.
For more than one bottle, you pass “them” around.
*/

// We will create a fonction and put all the instructions
function bottlesCountDown(bottlesNumber){// The  fonction will take the number of starting bottles as a parameter
    var substractedNumber=1; // this variable will be used to count down bottles
    alert(`${bottlesNumber} bottles of beer on the all \n${bottlesNumber} bottles of beer `) // dispaying the current number of bottles
    var bottleTakenDown=prompt(`Take ${substractedNumber} down, pass it aroud`) // asking the user to prompt the number of substraction
    var convertNumber=Number(bottleTakenDown); // Conversion of the substraction's number 
    while(bottlesNumber>0){ // A loop for keeping counting down bottles while the number is bigger than 0
        if (substractedNumber===1){ // This condition is put for the case where substracted numbers is equal to 1
            if (isNaN(bottleTakenDown) || bottleTakenDown !=substractedNumber){ // condition for the case where the user prompt anything different from 1
                alert(`Error: take ${substractedNumber} down`);
                bottleTakenDown=prompt(`Take ${substractedNumber} down, pass it aroud`);
                convertNumber=Number(bottleTakenDown); 
            }else{
                bottlesNumber -= substractedNumber; 
                substractedNumber +=1;
                alert(`we have now ${bottlesNumber} bottles of beer on the all`);
                alert(`${bottlesNumber} bottles of beer on the all \n${bottlesNumber} bottles of beer`);
                bottleTakenDown=prompt(`Take ${substractedNumber} down, pass them aroud`);
            }
        }
        
        else if (substractedNumber < bottlesNumber){ // Condition when substracted number is smaller than bottles number
            if (isNaN(bottleTakenDown) || bottleTakenDown !=substractedNumber){ //condition for the case where the user prompt anything different from the requested number
                alert(`Error: take ${substractedNumber} down`);
                bottleTakenDown=prompt(`Take ${substractedNumber} down, pass them aroud`);
                convertNumber=Number(bottleTakenDown); 
            }else{
                bottlesNumber -= substractedNumber; 
                substractedNumber +=1;
                alert(`we have now ${bottlesNumber} bottles of beer on the all`);
                alert(`${bottlesNumber} bottles of beer on the all \n${bottlesNumber}bottles of beer`);
                bottleTakenDown=prompt(`Take ${substractedNumber} down, pass them aroud`);
                convertNumber=Number(bottleTakenDown); 

            }
            
        }
        else { //Condition when substracted number is bigger than bottles number
            substractedNumber=bottlesNumber; // putting the substracted number equal to bottles number so that the substraction could be possible
            if (isNaN(bottleTakenDown) || bottleTakenDown !=substractedNumber){ //condition for the case where the user prompt anything different from the requested number
                alert(`Error: this number of bottles is not on the all `);
                alert(`we have now ${bottlesNumber} bottles of beer on the all`);

                bottleTakenDown=prompt(`Take ${substractedNumber} down, pass them aroud`);
                convertNumber=Number(bottleTakenDown); 
            }else{
                bottlesNumber -= substractedNumber; // Bottles number will be 0 here
                alert(`we have now ${bottlesNumber} bottles of beer on the all`); // displaying the bottles number
                alert(`Thank You  for singing the 99 bottles of beer's song `) // Displaying this message after all the actions
               
            }
            
        }
    

    }
}

bottlesCountDown(99); // We are now calling the fuction with 99 as a parameter


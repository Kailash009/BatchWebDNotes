var text="programmer";
var vw=0;
var con=0;
for(var res of text)
{
    if(res=='a'|| res=='e' || res=='i'|| res=='o'||res=='u')
    {
        vw++;
    }
    else
    {
        con++;
    }
}
console.log('Vowel=',vw);
console.log('Consonant=',con);
// wap to find the total of vowel and consonant of given string
// using for-of
// Hint 
// name="aditiya"
// vowel => 4
// const => 3
const prompt=require('prompt-sync')();
var ch=prompt('Enter Character=').toLowerCase();
if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
{
console.log(ch,' is Vowel');
}
else 
{
    console.log(ch,' is Consonant');
}

// Question Statement 1

let rows1 = 5;

let pattern1 = "";

for (let n = 1; n <= rows1; n++) {
   for (let num = 1; num <= 6 - n; num++) {
      pattern1 += num;
   }
   pattern1 += "\n";
}
console.log(pattern1);

//Question statement 2

let pattern7=""
for(i=1;i<=5;i++)
{
    for(j=i;j<=5;j++)
    {
        pattern7 = pattern7 + j;
    }
    pattern7 = pattern7 + "\n"; 
}
console.log(pattern7);

//Question Statement 3

let rows2 = 5;

let pattern2 = "";

for (let n = 1; n <= rows2; n++) {

   for (let num = 1; num <= 5; num++) {
      pattern2 += "*";
   }
   pattern2 += "\n";
}
console.log(pattern2);



//Question Statement 4

let rows3 = 5;

let pattern3 = "";


for (let n = 1; n <= rows3; n++) {
   for (let num = 1; num <= n; num++) {
     
      if ( num === n) pattern3 += "*";
      else {
         pattern3 += " ";
      }
   }
   pattern3 += "\n";
}
console.log(pattern3);


//Question Statement 5

let pattern8 =""
for(i=1;i<=9;i++){
   for(j=1;j<=9;j++){
      if(i%2==0){
         pattern8 += "B"
      }
      else{
         pattern8 += "A"
      }
      
   }
   pattern8 += "\n"
}
console.log(pattern8);


//Question Statement 6

let rows5 = 5;

let pattern5 = "";

for (let n = 1; n <= rows5; n++) {
   for (let num = 1; num <= n; num++) {
      pattern5 += n;
   }

   pattern5 += "\n";
}
console.log(pattern5);


//Question Statement 7

let rows6 = 4;

let variable = 1;

let pattern6 = "";

for (let n = 1; n <= rows6; n++) {
   for (let num = 1; num <= n; num++) {
      pattern6 += variable+" ";
      variable++;
   }
   pattern6 += "\n";
}
console.log(pattern6);


//Question Statement 8

let rows = 5;

let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 5; num++) {
      
      if (n == 1 || n == rows) pattern += "*";
      else {
         if (num == 1 || num == 5) {
            pattern += "*";
         } else {
            pattern += " ";
         }
      }
   }
   pattern += "\n";
}
console.log(pattern);

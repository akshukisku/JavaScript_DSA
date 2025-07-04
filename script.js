// currency breakdown
//  var amount = Number(prompt("Enter the amount"))
//   let n2000 = 0, n500 = 0, n200 = 0, n100 = 0, n50 = 0;
//   let n20 = 0, n10 = 0, n5 = 0, n2 = 0, n1 = 0;

//   if (amount >= 2000) {
//     n2000 = Math.floor(amount / 2000);
//     amount = amount % 2000;
//   }

//   if (amount >= 500) {
//     n500 = Math.floor(amount / 500);
//     amount = amount % 500;
//   }

//   if (amount >= 200) {
//     n200 = Math.floor(amount / 200);
//     amount = amount % 200;
//   }

//   if (amount >= 100) {
//     n100 = Math.floor(amount / 100);
//     amount = amount % 100;
//   }

//   if (amount >= 50) {
//     n50 = Math.floor(amount / 50);
//     amount = amount % 50;
//   }

//   if (amount >= 20) {
//     n20 = Math.floor(amount / 20);
//     amount = amount % 20;
//   }

//   if (amount >= 10) {
//     n10 = Math.floor(amount / 10);
//     amount = amount % 10;
//   }

//   if (amount >= 5) {
//     n5 = Math.floor(amount / 5);
//     amount = amount % 5;
//   }

//   if (amount >= 2) {
//     n2 = Math.floor(amount / 2);
//     amount = amount % 2;
//   }

//   if (amount >= 1) {
//     n1 = amount;
//   }

//   console.log("₹2000 x", n2000);
//   console.log("₹500 x", n500);
//   console.log("₹200 x", n200);
//   console.log("₹100 x", n100);
//   console.log("₹50 x", n50);
//   console.log("₹20 x", n20);
//   console.log("₹10 x", n10);
//   console.log("₹5 x", n5);
//   console.log("₹2 x", n2);
//   console.log("₹1 x", n1);

//Rating films

// let rating = Number(prompt("Enter the rating"));

// if (rating>0.0 && rating<=2.0){
//     console.log("Flop");
// }
// if (rating>2.1 && rating <=3.4)
// {
//     console.log("Semi-hit");
// }
// if (rating>3.5 && rating<=4.5)
// {
//     console.log("Hit");
// }
// if (rating >4.6 && rating <=5.0)
// {
//     console.log("BlockBuster");
// }
 
//Loops
// let n = Number(prompt("Enter the number"));

// let i;
// for ( i=1;i<=n;i++)
// {
//     console.log("helllo world");
// }

// console.log("fail at"+ i)


//multiplication table
// let n= Number(prompt("Enter the number of the table"))
// let i;
// for(i=1;i<=10;i++)
// {
//     console.log(n+" *"+i+"="+(n*i));
// }

//Sum upto n terms
// let n = Number(prompt("Enter the number"));

// let i,sum=0;
// for(i=1;i<=n;i++)
// {
//      sum +=i;
// }
// console.log(sum);

//Factorial of a number
// let n = Number(prompt("Enter the factorial of a number"));
// let i=1,fact=1;
//using while loop
// while(i<=n)
// {   
//     fact=fact*i;
//     i++;
// }
// console.log(fact);
// using for loop
// for(i=1;i<=n;i++)
// {
//     fact = fact*i;
// }
// console.log(fact);

//even and odd number sum ranges
// let n = Number(prompt("Enter the number"));
// let oddSum=0,evenSum=0,i=1;
// while(i<=n)
// {
//     if(i%2==0) evenSum=evenSum+i;
//     else oddSum = oddSum+i;
// }

// console.log("Even sum is "+evenSum);
// console.log("Odd Sum is : "+oddSum);

// find the factors of the numbers

// let n = Number(prompt("Enter the number of the factors"))
// let i;

// for(i=1;i<=n;i++)
// {
//     if(n%i==0) console.log(i);
// }

//find the prime numbers
// let n = Number(prompt("Enter the number"))
// let isPrime=true;

// for(i=2;i<n;i++)
// {
//     if(n%i==0)
//     {
//         isPrime=false;
//         break;
//     }
// }

// if(isPrime) console.log("Prime number")
// else console.log("Odd Number")

let n = Number(prompt("Enter the number"));
let rev=0 ;

while(n>0)
{
    let rem = n%10;
    rev = (rev *10)+rem;
    n = Math.floor(n/10);
}

console.log(rev);


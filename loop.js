// // // problem-1: ১ থেকে ৫০ পর্যন্ত সংখ্যা প্রিন্ট ঃ
for( let i = 1; i <= 50; i++ ){
    console.log(i);
    
}

// // // problem-2: ৩৩ থেকে ১ পর্যন্ত সংখ্যা প্রিন্টঃ
for( let i = 33; i >= 1; i-- ){
    console.log(i);
    
}

// problem-3: ১ থেকে ৪৫ এর মধ্যে যতগুলা জোড় সংখ্যা  আছে সেগুলোর যোগফল ঃ
let sum = 0;
for(let i = 0; i <= 45; i += 2 ){
    if(sum += i){        
    }
}
console.log(sum);


// let sum = 0;
// for(let i = 0; i <= 45; i+= 2 ){
//     if(i % 2 === 0){
//         sum +=i;
//     }
// }
// console.log(sum);

// problem 4: ১ থেকে ১০ পর্যন্ত সকল বেজোড় সংখ্যার বর্গ বের করে সবগুলো বর্গকে যোগ ঃ
  
sum = 0;
for( let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        sum += Math.pow(i,2);
    }
}
console.log(sum);


// problem 5: ৭ ঘরের নামতা লেখার জন্য একটি প্রোগ্রামঃ
 for( let i = 1; i<= 10; i++){
    console.log(7 + " * " + i + " = " + i * 7);
    
 }

// problem 6: ১৩৯৫৮৬৮৮৩ সংখ্যাটিতে কয়টি ডিজিট আছে তা বের করার প্রোগ্রামঃ
let digits = 139586883;
let digitsLenth = digits.toString().length;
console.log(digitsLenth)


// const digits =[ 1, 3, 9, 5, 8, 6, 8, 8, 3];
// let i = 0;
// while(i<digits.length){
//     console.log(digits[i]);
//     i++
// }

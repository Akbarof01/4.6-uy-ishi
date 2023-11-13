//Fort1
//function a (k, n) {
//  return k * n;
//}

//const result = a (5, 3);
//console.log(result); 
// Output: 15

//Fort2
//let a = parseInt(prompt("a qiymatini kriting: "));
//let b = parseInt(prompt("b qiymatini kriting: "));

//if (a >= b) {
//    console.log("Please make sure a < b.");
//} else {

//    let numbers = Array.from({ length: b - a + 1 }, (_, index) => a + index);


//    console.log(`Integers between ${a} and ${b}: ${numbers}`);
    
 
//    console.log(`Number of extracted numbers: ${b - a + 1}`);
//}

//For3
//function printNumbersAndCount(a, b) {
//    const numbers = Array.from({ length: b - a - 1 }, (_, index) => b - 1 - index);
    
//    numbers.forEach(num => {
//      console.log(num);
//    });
  
//    console.log("Chiqarilgan raqamlar soni:", numbers.length);
//  }
  
//  const a = 5;
//  const b = 12;
//  printNumbersAndCount(a, b);

//For4
//function calculateCandyPrice(narxboshigaKg) {
//    for (let kg = 1; kg <= 10; kg++) {
//      const umumiynarx = narxboshigaKg * kg;
//     console.log(`narx ${kg} kg: ${umumiynarx}`);
//    }
//  }
  
//  const narxboshigaKg = 2.5;
//  calculateCandyPrice(narxboshigaKg);

//For5
//function calculateCandyPriceForDifferentPrices(prices) {
//    prices.forEach(price => {
//      const totalPrice = price * 1; // 1 kg
//      console.log(`narxi 1 kg da ${price} sum kg: ${totalPrice}`);
 //   });
//  }
  
//  const prices = [0.1, 0.2, 0.9];
//  calculateCandyPriceForDifferentPrices(prices);

//For6
//function calculateCustomCandyPrice(pricePerKg, weights) {
//    weights.forEach(weight => {
//      const totalPrice = pricePerKg * weight;
//      console.log(`narxi ${weight} kg: ${totalPrice}`);
//    });
//  }
  
//  const pricePerKg = 3.0; // Replace with the actual price
//  const weights = [1.2, 1.4, 2.0];
//  calculateCustomCandyPrice(pricePerKg, weights);

//For7
//function sumIntegers(a, b) {
//    let sum = 0;
//    for (let i = a; i <= b; i++) {
//      sum += i;
//    }
//    return sum;
//  }

//  const a = 1;
//  const b = 5;
//  const result = sumIntegers(a, b);
//  console.log(`butun sonlar yig'indisi ${a} va ${b} bu: ${result}`);

//For8
//function multiplyIntegers(a, b) {
//    let product = 1;
//    for (let i = a; i <= b; i++) {
//      product *= i;
//    }
//    return product;
//  }
  
//  const a = 2;
//  const b = 5;
//  const result = multiplyIntegers(a, b);
//  console.log(`butun sonlar yig'indisi ${a} va ${b} bu: ${result}`);

//For8
//function sumSquares(a, b) {
//    let sum = 0;
//    for (let i = a; i <= b; i++) {
//      sum += i * i;
//    }
//    return sum;
//  }
  
//  const a = 1;
//  const b = 3;
//  const result = sumSquares(a, b);
//  console.log(`butun sonlar yig'indisi ${a} va ${b} bu: ${result}`);

//For9
//function calculateSum(n) {
//    let sum = 0;
//    for (let i = 1; i <= n; i++) {
//      sum += 1 / i;
//    }
//    return sum;
//  }
  
//  const n = 5;
//  const natija = calculateSum(n);
//  console.log(`summasi 1 + 1/2 + 1/3 + ... + 1/${n} bu: ${natija}`);

//For10
//function calculateSum(n) {
//    let sum = 0;
//    for (let i = n; i <= 2 * n; i++) {
//      sum += i ** 2;
//    }
//    return sum;
//  }
  
//  const n = 3;
//  const natija = calculateSum(n);
//  console.log(`summasi n² + (n+1)² + (n+2)² + ... + (2n)² bu: ${natija}`);

//For11
//function calculateMultiplication(n) {
//    let product = 1;
//    for (let i = 1; i <= n; i++) {
//      product *= 1 + (i / 10);
//    }
//    return product;
//  }
  
//  const n = 5;
//  const natija = calculateMultiplication(n);
//  console.log(`Ko'paytirish 1.1 * 1.2 * 1.3 * ... * (n ko'paytirgich) bu: ${natija}`);

//For12
//function calculateEmptyPart(A, B) {
//    let emptyPart = 0;
  
//    while (A >= B) {
//      A -= B;
//      emptyPart = A;
//    }
  
//    return emptyPart;
//  }
  
//  const A = 15;
//  const B = 3;
//  const natija = calculateEmptyPart(A, B);
//  console.log(`Bo'limning bo'sh qismi A bu: ${natija}`);

//For13
//function calculateSections(A, B) {
//    let count = 0;
  
//    while (A >= B) {
//      A -= B;
//      count++;
//    }
  
//    return count;
//  }
  
//  const A = 15;
//  const B = 3;
//  const natija = calculateSections(A, B);
//  console.log(`B bo'limi bo'limga joylashtirilishi mumkin A ${natija} vaqt.`);

//For14
//function calculateRemainderAndQuotient(N, K) {
//    let remainder = N;
//    let quotient = 0;
  
//    while (remainder >= K) {
//      remainder -= K;
//      quotient++;
//    }
  
//    return { remainder, quotient };
//  }
  
//  const N = 17;
//  const K = 5;
//  const result = calculateRemainderAndQuotient(N, K);
//  console.log(`Qolgan: ${result.remainder}, Korsatgich: ${result.quotient}`);

//For15
//function checkPowerOf3(n) {
//    while (n > 1) {
 //     if (n % 3 !== 0) {
 //       return "not a quvvat 3";
 //     }
 //     n /= 3;
 //   }
 //   return "quvvat 3";
 // }
  
//  const n = 27;
//  const natija = checkPowerOf3(n);
//  console.log(`Raqam ${n} bu ${natija}.`);

//For16
//function checkPowerOf2(n) {
//    while (n > 1) {
//      if (n % 2 !== 0) {
//        return "not a quvvat 2";
//      }
//      n /= 2;
//    }
//    return "quvvat 2";
//  }
  
//  const n = 16;
//  const natija = checkPowerOf2(n);
//  console.log(`Raqam ${n} bu ${natija}.`);

//For17
//function divideWithoutDivision(n, m) {
//    let quotient = 0;
  
//    while (n >= m) {
//      n -= m;
//      quotient++;
//    }
  
//    return quotient;
//  }
  
//  const n = 15;
//  const m = 3;
  //const result = divideWithoutDivision(n, m);
//  console.log(`Bo'linish natijasi ${n} tomonidan// ${m} bu: ${result}`);

//For18
//function reverseNumber(n) {
//    let reversed = 0;
  
//    while (n > 0) {
//      const digit = n % 10;
//      reversed = reversed * 10 + digit;
//      n = Math.floor(n / 10);
//    }
  
//    return reversed;
//  }
  
//  const n = 12345;
//  const result = reverseNumber(n);
//  console.log(`bu ${n} ning teskarisi: ${result}`);

//For19
//function calculateSumAndCount(n) {
//    let sum = 0;
//    let count = 0;
  
//    while (n > 0) {
//      const digit = n % 10;
//      sum += digit;
//      count++;
//      n = Math.floor(n / 10);
//    }
  
//    return { sum, count };
//  }
  
//  const n = 12345;
//  const result = calculateSumAndCount(n);
//  console.log(`Raqamlar yig'indisi: ${result.sum}, Raqamlar soni: ${result.count}`);

//For20
//function containsDigitTwo(n) {
//    while (n > 0) {
//      const digit = n % 10;
//      if (digit === 2) {
//        return true;
//      }
//      n = Math.floor(n / 10);
//    }
  
//    return false;
//  }

//  const n = 12345;
//  const result = containsDigitTwo(n);
//  console.log(`Raqam 2 ${result ? 'bu' : 'is not'} mavjud ${n}.`);

//For21
//function hasOddDigit(n) {
//    while (n > 0) {
//      const digit = n % 10;
//      if (digit % 2 !== 0) {
//        return true;
//      }
//      n = Math.floor(n / 10);
//    }
  
//    return false;
//  }

//  const n = 12345;
//  const result = hasOddDigit(n);
//  console.log(`U yerda ${result ? 'bor' : 'are no'} ichida toq raqamlar ${n}.`);

//For22
//function isPrime(n) {
//    if (n <= 1) {
//      return false;
//    }
  
//    for (let i = 2; i <= Math.sqrt(n); i++) {
//      if (n % i === 0) {
//        return false;
//      }
//    }
  
//    return true;
//  }
  

//  const n = 17;
//  const result = isPrime(n);
//  console.log(`Raqam ${n} bu ${result ? 'asosiy' : 'not prime'}.`);
// 1-misol

{
  function maskify(cc) {
    if (cc.length <= 4) {
      return cc;
    }
    let masked = "#".repeat(cc.length - 4) + cc.slice(-4);
    return masked;
  }
}

// 2-misol

{
  function solution(number) {
    if (number < 0) {
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

// 3-misol

{
  function accum(s) {
    return s
      .split("")
      .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
      .join("-");
  }
}

// 4-misol

{
  function oddOrEven(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);

    return sum % 2 === 0 ? "even" : "odd";
  }
}

// 5-misol

{
  function oddOrEven(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);

    return sum % 2 === 0 ? "even" : "odd";
  }
}

// 6-misol

{
  function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
      return false;
    }

    return /^\d+$/.test(pin);
  }
}

// 7-misol

{
  function digitalRoot(n) {
    if (n === 0) return 0;
    return 1 + ((n - 1) % 9);
  }
}

// 8-misol

{
  function multiply(a, b) {
    return a * b;
  }
}

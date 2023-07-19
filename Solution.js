let profit = [0, 0, 0];
const timeUnit = [4, 5, 10];

function findProfit(n) {
  let initialProfit = 0;
  let prof = [0, 0, 0];

  if (n < 4) {
    return 0;
  } else {
    let temp = n - 4;
    prof[0] = temp * 1000;

    if (n >= 5) {
      temp = n - 5;
      prof[1] = temp * 1500;

      if (n >= 10) {
        temp = n - 10;
        prof[2] = temp * 3000;
      }
    }
  }

  const maxIndex = maxProfit(prof);
  initialProfit += prof[maxIndex];
  profit[maxIndex]++;
  return initialProfit + findProfit(n - timeUnit[maxIndex]);
}

function maxProfit(prof) {
  if (prof[0] >= prof[1]) {
    if (prof[0] >= prof[2]) {
      return 0;
    } else {
      return 2;
    }
  } else if (prof[1] >= prof[2]) {
    return 1;
  } else {
    return 2;
  }
}

const earnings = findProfit(13);
console.log("Earnings: $" + earnings);
console.log("Solution: \n" + `T: ${profit[1]}, P: ${profit[0]}, C: ${profit[2]}`);

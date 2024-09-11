function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || expenses > income) {
    return "Invalid Input";
  }
  const BeforeTax = income - expenses;
  const Tax = BeforeTax * 0.2;
  return Tax;
}

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Input";
  }

  const emailSplit = email.split("@");
  const userName = emailSplit[0];
  const domainName = emailSplit[1];
  return userName + " sent you an email from " + domainName;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const nameSplit = name.split("");
  const isDights = [];
  for (const element of nameSplit) {
    isDights.push(isNaN(parseInt(element)));
  }

  for (const element of isDights) {
    if (element === false) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid Input";
  }

  let isFFamily;

  if (obj.isFFamily === true) {
    isFFamily = 20;
  } else {
    isFFamily = 0;
  }
  if (obj.testScore <= 50 && obj.schoolGrade <= 30) {
    const totalScore = obj.testScore + obj.schoolGrade + isFFamily;

    if (totalScore >= 80) {
      return true;
    }
  }
  return false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) !== true ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }

  let sum = 0;
  for (const element of waitingTimes) {
    sum += element;
  }
  const averageTime = Math.round(sum / waitingTimes.length);

  const position = serialNumber - 1;

  const remaining = Math.abs(position - waitingTimes.length);

  const TimeNeed = averageTime * remaining;

  return TimeNeed;
}

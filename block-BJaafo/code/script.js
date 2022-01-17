function getuser(firstName, lastName) {
  return firstName + " " + lastName; 
}

let result = getuser("suraj","mane");

let expected = "suraj";

if(result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

////

function getTax(amount,taxtRate){
  return amount + (amount * taxtRate);
}

let taxAmount = getTax(400,2);

let expected_1 = 500;

if(taxAmount !== expected_1) {
  throw new Error(`${taxAmount} is not equal to ${expected_1}`);
}

function addTwoNumber(numA, numB){
  return numA + numB;
}

function mulTwoNumber(numA, numB){
  return numA + numB;
}

let result, exprcted;

function test(message, callback) {
  try {
    callback();
    console.log("ok",message);
  } catch (error) {
    console.error(error);
    console.log("Not Okay",message);
  }
}

function expect(actual) {
  return {
    toEqual: function (ecprcted){
      if(actual !== ecprcted){
        throw new Error(`${actual} is not equal to ${exprcted}`);
      }
    },
    toBeEqual: function (ecprcted){
      if(typeof actual !== ecprcted){
        throw new Error(`${typeof actual} is not equal to ${exprcted}`);
      }
    }
  }
}


function testadd(){
  result = addTwoNumber(2,4);
  exprcted = 5;
  expect(result).toEqual(exprcted);
}

test("testing functon", testadd);

function testmul(){
  result = mulTwoNumber(2,4);
  exprcted = 10;
  exprcted(result).toEqual(exprcted);
}

test("mul 10 * 10 to be equal 100", () => {
  expect(addTwoNumber(10,10)).toEqual(20);
});

test("mul 10 * 10 to be equal 100", () => {
  expect(mulTwoNumber(10,0)).toEqual(10);
});

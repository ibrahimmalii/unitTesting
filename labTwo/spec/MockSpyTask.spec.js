const { sum, positive } = require('../index')

var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
 return counter.currentValues();
}

var newCounter;

describe("mock and spy", function () {
  //spy on counter object currentValue property and mock its implementation to equal [100]
  it('test spy', ()=>{
    spyOn(counter, 'currentValues')
    newCounter = jasmine.createSpyObj(newCounter, {}, {numberValue : [100]})
    console.log(newCounter.numberValue)
  })
  // expect some of values is returning the right value (new mocked value 100) after mocking
  // and expect that we called the spy function for one time
  it("spying", function () {
    // spyOn(newCounter, 'numberValue')
    // expect(counter.currentValues()).toEqual(1)
    // expect(newCounter.numberValue).toHaveBeenCalledTimes()
  });

  // mocka function that takes any string and return number, call it twice and expect that it is called twice
  it("mocking", ()=> {
    // counter.prototype.returnedNumberFromString = (str)=>{
    //   return str.length
    // }
    // spyOn(counter, 'returnedNumberFromString')
    // counter.returnedNumberFromString('ibrahim')
    // expect(counter.returnedNumberFromString).toEqual(Number)

  });
});

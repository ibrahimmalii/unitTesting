const { sum, positive } = require('../index')


describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  // at before all assign pos vals with array of positive numbers,
  pos_vals = [2, 4, 6, 8]

  // and assign negative vals with negative array of numbers,
  neg_vals = [1, 3, 5, 7]

  // assign vals to pos_vals.concat(neg_vals);
  vals = pos_vals.concat(neg_vals)

  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
  sum_of_vals = vals.reduce((x, y) => x + y, 0)

  // at before each console.log all vals
  beforeEach(()=>{
    vals.forEach((value)=>{
      console.log(value)
    })
  })

  // at after each console.log done
  afterEach(()=>{
    console.log('done')
  })

  // at after all set all variables to 0
  afterAll(()=>{
    pos_vals, neg_vals, vals, sum_of_vals = 0
  })

  it("sum function should equal to sum of the values", () => {
    expect(sum(vals)).toBe(sum_of_vals)
  });

  it("positive function should equal to positive values", () => {
    // expect(positive(vals)).not
  });
});

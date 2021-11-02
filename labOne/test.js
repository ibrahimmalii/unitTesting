const mocha = require('mocha')
const functionsFor = require('./index')
const assert = require('assert');

const should = require('chai').should()
const expect = require('chai').expect


//************ First Function ************ */
describe('function returned string', function() {

    //1-
    it('should return string', ()=>{
        expect(functionsFor.capitalizeText('ibrahim')).to.be.a('string');
    })

    //2-
    it('should return only string', function() {
      assert.equal(functionsFor.capitalizeText('ibrahim'),'IBRAHIM');
    });

    //3-
    it('return anything else', ()=>{
        expect(functionsFor.capitalizeText(null)).to.throw(TypeError, 'parameter should be string');
    })

    //4-
    it('returned value not equal hello', ()=>{
        // assert.notequal(functionsFor.capitalizeText('ibrahim'), ('hello'))
        expect(functionsFor.capitalizeText('ibrahim')).to.not.match(/hello/)
    })

});


// *************** Second Function************//

describe('test function create arr',()=>{
    it('test returned array', ()=>{
        expect(functionsFor.createArray(3)).to.be.an('array')
    })

    it('test pass 3 value', ()=>{
        expect(functionsFor.createArray(3)).to.have.lengthOf(3).that.is.include(1)
    })

    var testingVar = 1
    for(let i = 0; i < 3; i++){
        testingVar ++
        it('make a variable for test', ()=>{
            expect(functionsFor.createArray(testingVar))
        })
    }

    setTimeout(() => {
        it('try to delay test', ()=>{
            expect(functionsFor.createArray(3))
        })
    }, 5000);

    it.skip('pending test', ()=>{
        assert.equal(functionsFor.createArray(3), [1,2,3])
    })
})

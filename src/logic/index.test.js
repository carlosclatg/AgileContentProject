// import logic from './'


var assert = require('assert');
var expect = require('expect.js')
var logic = require('./index.js')

describe('Logic Test', function() {

  describe('getPeople function', function() {
    it('should fail when entering a non string param', function() {
      try{
        let searchCriteria = 123;
        const a = logic.getPeople(searchCriteria);
      } catch(error){
          expect(error).to.be.a(Error)
      }
    });
  });
  describe('getPeople function with random search, non expecting result', function() {
    it('should retrieve a empty Array', function() {
        try{
            let searchCriteria = 'tsubsbhfbdldhbfdbfdbhfjhbdfbhjfdhbjdfhbjdfhbhdbhfdbhd';
            logic.getPeople(searchCriteria)
                .then(result => {
                    expect(result).to.be.a(Array)
                    expect(result.length).to.be(0)
                })
        } catch(error){
            expect(error).to.be(undefined)
        }
    });
  });
  describe('getPeople function with Luke Skywalker', function() {
    it('should retrieve an array of length =1 ', function() {
        try{
            let searchCriteria = 'Luke Skywalker';
            logic.getPeople(searchCriteria)
                .then(result => {
                    expect(result).to.be.a(Array)
                    expect(result.length).to.be(1)
                })
        } catch(error){
            expect(error).to.be(undefined)
        }
    });
  });
  describe('getPeople function with one vowel', function() {
    it('should retrieve an array of length > 0 ', function() {
        try{
            let searchCriteria = 'a';
            logic.getPeople(searchCriteria)
                .then(result => {
                    expect(result).to.be.a(Array)
                    expect(result.length).to.be.greaterThan(0)
                })
        } catch(error){
            expect(error).to.be(undefined)
        }
    });
  });
});


import { exportAllDeclaration } from '@babel/types';

var assert = require('assert');
var expect = require('expect.js')
var SWApi = require('../peopleApi')

describe('API Test', function() {

    //getPeople(searchCriteria, arrayPeople, nextPage, resolve, reject){
  describe('getPeople function - should fail on wrong type para', function() {
    it('should fail on wrong type para', function() {
      try{
        SWApi.getPeople(null, [], null, null, null);
      } catch(error){
          expect(error).to.be.a(Error)
      }
    });
    it('should fail on wrong type para', function() {
        try{
            const a = 1
            SWApi.getPeople('a', [], null, a, null);
        } catch(error){
            expect(error).to.be.a(Error)
        }
    });
    it('should fail on wrong type para', function() {
        try{
            const b = 1
            SWApi.getPeople(null, [], null, null, b);
        } catch(error){
            expect(error).to.be.a(Error)
        }
    });
    

  });
  describe('getPeople function', function() {
    it('should retrieve correctly data', function() {
        try{
            let searchCriteria = 'sa'
            const a = () => {
                return new Promise((resolve, reject) => {
                    SWApi.getPeople(searchCriteria, null, 0, resolve, reject)
                })
                .then(response => {
                    console.log(response)
                    return resolve(response)
                })
            }
            console.log(a)
            expect(a)
        } catch(error){
            expect(error).to.be.a(Error)
        }
    });
   })

})

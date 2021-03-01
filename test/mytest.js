//const { assert } = require("console");
//const { isMainThread } = require("worker_threads");

var HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', function(accounts){
    it("Should put 1000 coins int the owners account", function(){
        return HelloWorld.deployed().then(function(instance){
            return instance.balance.call(accounts[0]);
        }).then(function(balance){
            assert.equal(balance.valueOf(), 1000, "1000 was not in the account");
        });
    });
    
    it("Should return the name Shantanu", function(){
        return HelloWorld.deployed().then(function(instance){
            return instance.getName.call();
        }).then(function(name){
            assert.equal(name, "Shantanu", "The name was not Shantanu");
        });
    });

    it("Should Not return the name Shantanu", function(){
        return HelloWorld.deployed().then(async function(instance){
            await instance.setName('Bob');
            return instance.getName.call();
        }).then(function(name){
            assert.notEqual(name, "Shantanu", "The name was Shantanu");
        });
    });
}); 
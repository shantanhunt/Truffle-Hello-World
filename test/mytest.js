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
}); 
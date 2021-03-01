const hello = artifacts.require('./HelloWorld');

const helloSettings = {
    name: "Shantanu"
};

module.exports = function(deployer){
    deployer.deploy(hello);
};
const TokenProject1 = artifacts.require('TokenProject1');

module.exports = function(deployer, network, accounts) {
    const owner = accounts[0];
    const numConfirmationsRequired = 1; 
    deployer.deploy(TokenProject1);
}

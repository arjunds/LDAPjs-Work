var ldap = require('ldapjs');
var password = "password";

var ldapServer = ldap.createServer();
ldapServer.listen(8081, 'localhost', function() {
    console.log('LDAP server up at: %s', ldapServer.url);
});
ldapServer.bind('cn=root', function(req, res, next) {
    if (req.dn.toString() !== 'cn=root' || req.credentials !== password) {
        console.log("LDAP:Wrong Password!");
        return next(new ldap.InvalidCredentialsError());
    }
    console.log("LDAP:Right Password!");
    res.end();
    return next();
});

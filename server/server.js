var ldap = require('ldapjs');
var http = require('http');
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

var client = ldap.createClient({
    url: 'ldap://127.0.0.1:8081'
});

var server = http.createServer(function(req, res) {
    client.bind('cn=root', password, function(err) {
        console.log("Server:" + password);
    });
});
server.listen(8080, 'localhost', function() {
    console.log('Server running at: %s', server.url);
});

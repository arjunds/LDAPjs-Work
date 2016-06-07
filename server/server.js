var ldap = require('ldapjs');
var http = require('http');

var ldapServer = ldap.createServer();
ldapServer.listen(8081, 'localhost', function() {
    console.log('LDAP server up at: %s', ldapServer.url);
});

var client = ldap.createClient({
    url: 'ldap://127.0.0.1:8081'
});

var server = http.createServer(function(req, res) {

});
server.listen(8080, 'localhost', function() {
    console.log('Server running at: %s', server.url);
});

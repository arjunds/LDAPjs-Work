var ldap = require('ldapjs'),
    http = require('http'),
    client = ldap.createClient({
        url: 'ldap://127.0.0.1:1389'
    });

var ldapServer = ldap.createServer();
ldapServer.listen(8081, 'localhost', function() {
    console.log('LDAP server up at: %s', ldapServer.url);
});

var server = http.createServer(function(req, res) {

});
server.listen(8080, 'localhost', function() {
    console.log('Server running at: %s', server.url)
});

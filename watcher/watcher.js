var net = require('net');
var client = net.connect({port: 9090},
	function () { //'connect' listener
		//console.log('connected to server!');
		client.write(process.argv[2]);
	});
client.setTimeout(5000, function(){
	client.end();
});
client.on('data', function (data) {
	console.log(data.toString());
});
client.on('end', function () {
	//console.log('disconnected from server');
});
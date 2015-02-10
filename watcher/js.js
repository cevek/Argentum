var path = require('path');
var fs = require('fs');
var Q = require('q');
var spawn = require('child_process').spawn;

process.argv.shift();
process.argv.shift();
var projectsDir = process.argv.shift();

function deep(dir, main) {

	var main = main || [];
	var files = fs.readdirSync(dir);
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		if (file === '.git' || file === '.idea') {
			continue;
		}
		//console.log(dir + file);

		if (file.indexOf('.') === -1 && fs.statSync(dir + file).isDirectory()) {
			main = main.concat(deep(dir + file + '/'));
		}
		if (file === 'main.ts') {
			main.push(dir);
		}
	}
	return main;
}

var projects = deep(projectsDir);
console.log(projects);
var lastTime = Date.now();

var tsc = [];
var tasks = [];
projects.forEach(function (projectDir, i) {
	var task = {
		id: i,
		projectDir: projectDir,
		main: projectDir + 'main.ts',
		compiling: true,
		process: null,
		errors: []
	};
	task.process = spawn('tsc', [projectDir + 'main.ts', '--noImplicitAny', '--target', 'ES5', '-w', '--sourcemap',
		'--noEmitOnError', '--out', projectDir + 'compiled/script.js']);
	//console.log(command);
	startCompiling(task);

	task.process.stdout.on('data', function (data) {
		data = data.toString('utf-8');
		//console.log((Date.now() - lastTime) + ' / ' + i + ' stdout: ' + data);
		lastTime = Date.now();
		task.errors = task.errors.concat(processData(task, data));
		if (data.indexOf('TS6032') > -1) {
			task.compiling = true;
			startCompiling(task);
		}
		else if (data.indexOf('TS6042') > -1) {
			task.compiling = false;
			stopCompiling(task);
		}
	});

	task.process.on('close', function (code) {
		console.log('' + i + ' child process exited with code ' + code);
	});

	tasks[i] = task;
});

function processData(task, data) {
	var lines = data.split('\n');
	var newLines = [];
	var n = -1;
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		if (line.indexOf('message TS') > -1)
			continue;
		if (line[0] == '/') {
			n++;
		}
		if (n > -1) {
			newLines[n] = newLines[n] || [];
			newLines[n].push(line);
		}
	}

	var errors = [];
	for (var i = 0; i < newLines.length; i++) {
		errors.push(newLines[i].join("\n"));
	}
	return errors;
	//console.log(newLines);

}
var lastErrors = [];
var compiling = false;

function startCompiling(task) {
	lastErrors = [];
	compiling = true;
	var compiled = task.projectDir + 'compiled/script.js';
	task.errors = [];
	if (fs.existsSync(compiled)) {
		fs.unlinkSync(compiled);
	}
	console.log("start", task.id);
}

function stopCompiling(task) {
	var allDone = true;
	var errors = [];
	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];
		if (task.compiling) {
			allDone = false;
			errors = [];
			break;
		}

		for (var j = 0; j < task.errors.length; j++) {
			var error = task.errors[j];
			console.log("ERRR", error);

			error = error.replace(/(\/.*?\.ts)/g, function (m) {
				return path.relative('/users/cody/dev/ts/atomic/', m);
			});
			if (errors.indexOf(error) === -1) {
				errors.push(error);
			}
		}
	}

	if (allDone) {
		compiling = false;
		lastErrors = errors;
		clients.forEach(function (client) {
			client.write(lastErrors.join("\n"));
			client.write(new Date().toString());
			client.end();
		});
	}
	console.log("stop", task.id, allDone);
}


var rel = path.relative('/Users/cody/Dev/ts/Atomic/', '/Users/cody/Dev/ts/Atomic/formdemo/main.ts');
console.log(rel);


var clients = [];
var net = require('net');
var server = net.createServer(function (c) {
	console.log('client connected');
	c.on('data', function (data) {
		var filename = data.toString();
		console.log(filename);
		fs.futimes(fs.openSync(filename, 'r'), new Date(), new Date());
		//var content = fs.readFileSync(filename);
		//fs.writeFileSync(filename, content);
	});
	c.on('end', function () {
		console.log('client disconnected');
		var index = clients.indexOf(c);
		if (index > -1) {
			clients.splice(index, 1);
		}
	});
	clients.push(c);
/*
	if (!compiling) {
		c.write(lastErrors.join("\n"));
		c.end();
	}
*/
	//c.pipe(c);
});
server.listen(9090, function () {
	//console.log('server bound');
});


/*


 console.time('perf');
 var command = '--sourcemap /Users/cody/Dev/vuetest/test/Atomic/formdemo/all.ts --noImplicitAny --target ES5 ' +
 '--out /Users/cody/Dev/vuetest/test/Atomic/formdemo/compiled/script.js';

 var tsc = spawn('tsc', ['--sourcemap', '/Users/cody/Dev/vuetest/test/Atomic/formdemo/all.ts', '--noImplicitAny',
 '--target', 'ES5', '--out', '/Users/cody/Dev/vuetest/test/Atomic/formdemo/compiled/script.js', '-w']);
 console.log(command);

 var lastTime = Date.now();
 tsc.stdout.on('data', function (data) {
 console.log((Date.now() - lastTime)  + ' / stdout: ' + data);
 lastTime = Date.now();
 });

 tsc.stderr.on('data', function (data) {
 console.log('stderr: ' + data);
 });

 tsc.on('close', function (code) {
 console.log('child process exited with code ' + code);
 });

 */

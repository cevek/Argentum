/// <reference path="typings/webaudioapi/waa.d.ts" />

var canvas = <HTMLCanvasElement>document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//var context = new AudioContext();
var length = 15241583;
var fftSamples = 512;
var height = fftSamples / 2;

var context = new AudioContext();
var i = 0;

var processor = context.createScriptProcessor(fftSamples, 1, 1);
processor.connect(context.destination);

var analyser = context.createAnalyser();
analyser.smoothingTimeConstant = 0;
analyser.fftSize = fftSamples;

var source = context.createBufferSource();
var splitter = context.createChannelSplitter();
source.connect(splitter);
splitter.connect(analyser, 0, 0);

analyser.connect(processor);

var request = new XMLHttpRequest();
//    request.open('GET', "http://www.mindthepressure.org/bounce.ogg", true);
request.open('GET', "123.mp3", true);
request.responseType = 'arraybuffer';

var imd = ctx.createImageData(1, fftSamples);
var imdd = imd.data;
request.onload = function () {
//        $('#output').append('loaded ! ');
    context.decodeAudioData(request.response, function (buffer:AudioBuffer) {
//            $('#output').append('starting analysis<br />');
        processor.onaudioprocess = function (e) {
            var data = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(data);
            for (var j = 0; j < data.length; j++) {
                var dt = data[j];
                var v = dt > 130 + 130 * (1 / (j+1) * 10) ? 255 : 0;
                var t = height - j;
                imdd[t * 4 + 0] = v;
                imdd[t * 4 + 1] = v;
                imdd[t * 4 + 2] = v;
                imdd[t * 4 + 3] = 255;
            }
            ctx.putImageData(imd, i, 0);

            /*
             var average = getAverageVolume(data);
             var average = data[0];

             var max = Math.max.apply(Math, data);
             var coord = Math.min(average, 255);
             coord = Math.round((max + coord) / 2);
             ctx.fillStyle = gradient;
             ctx.fillRect(i, 255 - coord, 1, 255);

             */
            //console.log(i+' -> '+coord);

            i++;
        };

        source.buffer = buffer;
        //source.connect(context.destination);
        source.start(0);
        //context.startRendering();
    }, function onError(e:Error) {
//        $('#output').append('error, check the console');
        console.log(e);
    });
};
request.send();

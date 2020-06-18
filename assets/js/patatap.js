
function setKeyData() {
    keyData = {
        q: {
            sound: new Howl({
                src: ['assets/sounds/bubbles.mp3']
            }),
            color: '#1abc9c',
            melody: new Array(beats).fill(0),
            anim: 'treble'
        }, w: {
            sound: new Howl({
                src: ['assets/sounds/clay.mp3']
            }),
            color: '#2ecc71',
            melody: new Array(beats).fill(0),
            anim: 'melodic mid'
        }, e: {
            sound: new Howl({
                src: ['assets/sounds/confetti.mp3']
            }),
            color: '#3498db',
            melody: new Array(beats).fill(0),
            anim: 'mid star'
        }, r: {
            sound: new Howl({
                src: ['assets/sounds/corona.mp3']
            }),
            color: '#9b59b6',
            melody: new Array(beats).fill(0),
            anim: 'cymbal'
        }, t: {
            sound: new Howl({
                src: ['assets/sounds/dotted-spiral.mp3']
            }),
            color: '#34495e',
            melody: new Array(beats).fill(0),
            anim: 'bass'
        }, y: {
            sound: new Howl({
                src: ['assets/sounds/flash-1.mp3']
            }),
            color: '#16a085',
            melody: new Array(beats).fill(0),
            anim: 'mid star'
        }, u: {
            sound: new Howl({
                src: ['assets/sounds/flash-2.mp3']
            }),
            color: '#27ae60',
            melody: new Array(beats).fill(0),
            anim: 'treble star'
        }, i: {
            sound: new Howl({
                src: ['assets/sounds/flash-3.mp3']
            }),
            color: '#2980b9',
            melody: new Array(beats).fill(0),
            anim: 'treble'
        }, o: {
            sound: new Howl({
                src: ['assets/sounds/glimmer.mp3']
            }),
            color: '#8e44ad',
            melody: new Array(beats).fill(0),
            anim: 'cymbal'
        }, p: {
            sound: new Howl({
                src: ['assets/sounds/moon.mp3']
            }),
            color: '#2c3e80',
            melody: new Array(beats).fill(0),
            anim: 'bass'
        }, a: {
            sound: new Howl({
                src: ['assets/sounds/pinwheel.mp3']
            }),
            color: '#f1c40f',
            melody: new Array(beats).fill(0),
            anim: 'mid low'
        }, s: {
            sound: new Howl({
                src: ['assets/sounds/piston-1.mp3']
            }),
            color: '#e67e22',
            melody: new Array(beats).fill(0),
            anim: 'cymbal'
        }, d: {
            sound: new Howl({
                src: ['assets/sounds/piston-2.mp3']
            }),
            color: '#e74c3c',
            melody: new Array(beats).fill(0),
            anim: 'melodic mid'
        }, f: {
            sound: new Howl({
                src: ['assets/sounds/prism-1.mp3']
            }),
            color: '#95a5a6',
            melody: new Array(beats).fill(0),
            anim: 'cymbal'
        }, g: {
            sound: new Howl({
                src: ['assets/sounds/prism-2.mp3']
            }),
            color: '#f39c12',
            melody: new Array(beats).fill(0),
            anim: 'melodic mid'
        }, h: {
            sound: new Howl({
                src: ['assets/sounds/prism-3.mp3']
            }),
            color: '#d35400',
            melody: new Array(beats).fill(0),
            anim: 'cymbal'
        }, j: {
            sound: new Howl({
                src: ['assets/sounds/splits.mp3']
            }),
            color: '#1abc9c',
            melody: new Array(beats).fill(0),
            anim: 'mid low'
        }, k: {
            sound: new Howl({
                src: ['assets/sounds/squiggle.mp3']
            }),
            color: '#2ecc71',
            melody: new Array(beats).fill(0),
            anim: 'treble'
        }, l: {
            sound: new Howl({
                src: ['assets/sounds/strike.mp3']
            }),
            color: '#3498db',
            melody: new Array(beats).fill(0),
            anim: 'melodic mid'
        }, z: {
            sound: new Howl({
                src: ['assets/sounds/suspension.mp3']
            }),
            color: '#9b59b6',
            melody: new Array(beats).fill(0),
            anim: 'treble star'
        }, x: {
            sound: new Howl({
                src: ['assets/sounds/timer.mp3']
            }),
            color: '#34495e',
            melody: new Array(beats).fill(0),
            anim: 'cymbal'
        }, c: {
            sound: new Howl({
                src: ['assets/sounds/ufo.mp3']
            }),
            color: '#16a085',
            melody: new Array(beats).fill(0),
            anim: 'melodic mid'
        }, v: {
            sound: new Howl({
                src: ['assets/sounds/veil.mp3']
            }),
            color: '#27ae60',
            melody: new Array(beats).fill(0),
            anim: 'bass'
        }, b: {
            sound: new Howl({
                src: ['assets/sounds/wipe.mp3']
            }),
            color: '#2980b9',
            melody: new Array(beats).fill(0),
            anim: 'mid low'
        }, n: {
            sound: new Howl({
                src: ['assets/sounds/zig-zag.mp3']
            }),
            color: '#8e44ad',
            melody: new Array(beats).fill(0),
            anim: 'bass'
        }, m: {
            sound: new Howl({
                src: ['assets/sounds/moon.mp3']
            }),
            color: '#2c3e80',
            melody: new Array(beats).fill(0),
            anim: 'bass'
        }
    }
}

var text = new PointText({
    point: view.center,
    justification: 'center',
    fontSize: 40,
    fontFamily: "Roboto",
    fillColor: 'white',
    content: "How Many Measures?"
});

function resetText(textLine) {
    text.justification = 'right'
    text.opacity = 1;
    text.fillColor = 'white';
    text.content = textLine;
}

var keyData;
var beats = 4;
var currBeat = 0;
var playBeat = 0;
var firstKey = false;
var speed = 48;
var currFrame = 0;
var framesPerNote = 20;
var specialKey = null;
var repeatLetters = new Set();
var circles = [];

var wave = new Wave();

function Wave() {
    this.points = 10;
    this.path = new Path();
    this.height = view.center.y;
}
// var points = 10; // replace with speed
// var pathBass = new Path();
// var pathBassHeight = bassPos.y;
// pathBass.fillColor = 'black';
var bassWaves = [];

// function init() {
//     this.keyData;
//     this.beats = 4;
//     this.currBeat = 0;
//     this.firstKey = false;
//     this.circles = [];
//     this.speed = 48;
//     this.specialKey = null;
//     this.repeatLetters = new Set();
// }

function onKeyDown(event) {
    console.log(event);
    if (!firstKey) {
        firstKey = true;
        if (event.key >= '1' && event.key <= '4') {
            beats = 4 * event.key;
            resetText(event.key + " bars chosen in 4/4 time");
        } else {
            resetText( "1 bar chosen in 4/4 time");
        }
        setKeyData();
        return;
    }
    switch (event.key) {
        case '1': case '2': case '3': case '4': case '5':
        case '6': case '7': case '8': case '9': case '0':
            if (specialKey === '`') { // change speed for repeat patterns
                speed = (parseInt(event.key, 10) + 3) * 16;
                framesPerNote = Math.round( 3600 / speed);
                wave.points = Math.trunc( speed / 20);
                specialKey = null;
                resetText("Speed is now at " + speed + " BPM");
            } else {
                specialKey = event.key;
            }
            break;
        case '`':
            specialKey = event.key;
            break;
        case '-':
            currBeat = (((currBeat - 1) % beats) + beats) % beats;
            resetText("Now on Beat " + currBeat + " of " + beats);
            break;
        case '+':
        case '=':
            currBeat = (currBeat + 1) % beats;
            resetText("Now on Beat " + currBeat + " of " + beats);
            break;
        default:
            break;
    }
    if (keyData[event.key]) {
        // resetText(keyData[event.key].anim);
        // addSound(event.key, keyData.s.anim);
        addSound(event.key, keyData[event.key].anim);
    }
}

function onFrame(event) { //60 fps
    if (firstKey) {
        text.opacity *= 0.9;
        currFrame = (currFrame + 1) % framesPerNote;
        if (currFrame >= 1 && currFrame <= 4) {
            repeatLetters.forEach(playAll);
        } else if (currFrame === 5) {
            playBeat = (playBeat + 1) % beats;
        }
        animBaseWave(event);
        animCymbal();
    }
}

function playAll(key, value, set) {
    if (keyData[key].melody[playBeat] >= currFrame) {
        createSoundAndAnim(key, keyData[key].anim);
        // createSoundAndAnim(key, keyData[key].anim);
    }
}

function createCymbal(eventKey) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var point = maxPoint * Point.random();
    var newCircle = new Path.Circle(point, 500);
    newCircle.fillColor = keyData[eventKey].color;
    circles.push(newCircle);
}

function animCymbal() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
        if (circles[i].area < 1) {
            circles[i].remove(); // remove the circle from the canvas
            circles.splice(i, 1); // remove the circle from the array
        }
    }
}

function createBaseWave(eventKey) {
    wave = new Wave();
	wave.path.segments = [];
	wave.path.add(view.bounds.bottomLeft);
	for (var i = 1; i < wave.points; i++) {
		var point = new Point(view.size.width /(Math.trunc( speed / 20)) * i, view.center.y);
		wave.path.add(point);
	}
	wave.path.add(view.bounds.bottomRight);
	// wave.path.fullySelected = true;
	wave.path.fillColor = keyData[eventKey].color;
	wave.path.selected = true;
    bassWaves.push(wave);
}

function animBaseWave(event) {
    // resetText("animating Bass Waves")
    for (var j = 0; j < bassWaves.length; j++) {
        bassWaves[j].height -= (view.center.y - Math.log2(event.count) + bassWaves[j].height) / 100;
        if (bassWaves[j].height < view.center.y / 100) {
            bassWaves[j].path.remove();
            bassWaves.splice(j, 1);
        } else {
            // bassWaves[j].path.fillColor.saturation *= bassWaves[j].height / view.size.height;
            bassWaves[j].path.fillColor.lightness -= .01;
            for (var i = 1; i < bassWaves[j].points; i++) {
                var sinSeed = event.count + (i + i % 10) * 100;
                var sinHeight = Math.sin(sinSeed / 200) * bassWaves[j].height;
                bassWaves[j].path.segments[i].point.y = Math.sin(sinSeed / 100) * sinHeight + view.size.height / 2;
            }
            bassWaves[j].path.smooth({type: 'continuous'});
        }
    }
    // wave.height -= (view.center.y  - event.count + wave.height) / 100;
    // if (wave.height < view.center.y / 100) {
    //     wave.path.remove();
    // } else {
    //     wave.path.fillColor.lightness -= .01;
    //     // wave.path.fillColor.saturation *= bassWaves[j].height / view.size.height;
    //     for (var i = 1; i < wave.points; i++) {
    //         var sinSeed = event.count + (i + i % 10) * 100;
    //         var sinHeight = Math.sin(sinSeed / 200) * wave.height;
    //         wave.path.segments[i].point.y = Math.sin(sinSeed / 100) * sinHeight + view.size.height / 2;
    //     }
    //     wave.path.smooth({type: 'continuous'});
    // }
}

// Add sound to repeat loop if specialKey is #reps, else adds animation to queue
function addSound(eventKey, animType) {
    if (specialKey === '0' || (specialKey >= '1' && specialKey <= '4')) { //adding to sound rhythm array
        addRepeatSound(eventKey);
    }
    createSoundAndAnim(eventKey, animType);
}

function createSoundAndAnim(eventKey, animType) {
    keyData[eventKey].sound.play();
    // resetText(animType);
    switch (animType) {
        case 'bass':
            createBaseWave(eventKey);
            break;
        case 'cymbal':
            createCymbal(eventKey);
            break;
        // case 'melodic mid':
        //     break;
        // case 'mid low':
        //     break;
        // case 'mid star':
        //     break;
        // case 'treble':
        //     break;
        // case 'treble star':
        //     break;
        default:
            createCymbal(eventKey);
            // resetText("Wrong animType:" + animType);
            break;
    }
}

// function to set the number of notes to play at the current beat for the eventKey sound
function addRepeatSound(eventKey) {
    keyData[eventKey].melody[currBeat] = specialKey;
    (specialKey === '0') ? repeatLetters.delete(eventKey) : repeatLetters.add(eventKey);
    resetText("Changed sound " + eventKey + " to occur " +
            specialKey + " times (max 4) at beat " + currBeat + " of " + beats);
    specialKey = null;
}

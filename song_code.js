function goTimeline() {
    window.location.href = "timeline.html";
}

function goMySong() {
    window.location.href = "mysong.html";
}

function goFlowy() {
    window.location.href = "flowy.html";
}

let rainActive = false;
let raindrops = [];

let moonActive = false;
let moonOpacity = 0;
let moonPulse = 0;

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const textTarget = document.getElementById("lyrics-text");
    const lyricsContainer = document.getElementById("lyrics-container");

    const lyrics = [
        { time: 12, text: "And I'd give up forever to touch you", bgColor: "#2c3e50", textColor: "#ecf0f1" },
        { time: 16, text: "'Cause I know that you feel me somehow", bgColor: "#34495e", textColor: "#ecf0f1" },
        { time: 21, text: "You're the closest to heaven that I'll ever be", bgColor: "#1c2833", textColor: "#aab7b8" },
        { time: 25, text: "And I don't wanna go home right now", bgColor: "#5f6a6a", textColor: "#d5d8dc" },
        { time: 30, text: "And all I could taste is this moment", bgColor: "#2e4053", textColor: "#ecf0f1" },
        { time: 35, text: "And all I can breathe is your life", bgColor: "#4b4f54", textColor: "#d5d8dc" },
        { time: 40, text: "And sooner or later it's over", bgColor: "#566573", textColor: "#d5d8dc" },
        { time: 44, text: "I just don't want to miss you tonight", bgColor: "#2c3e50", textColor: "#ecf0f1" },
        { time: 49, text: "And I don't want the world to see me", bgColor: "#1c2833", textColor: "#aab7b8" },
        { time: 53, text: "'Cause I don't think that they'd understand", bgColor: "#34495e", textColor: "#ecf0f1" },
        { time: 58, text: "When everything's made to be broken", bgColor: "#3a3f47", textColor: "#dcdfe3"},
        { time: 63, text: "I just want you to know who I am", bgColor: "#2e4053", textColor: "#ecf0f1" },
        { time: 80, text: "When you can't fight the tears that ain't coming", bgColor: "#5f6a6a", textColor: "#d5d8dc" },
        { time: 84, text: "Or the moment of truth in your eyes", bgColor: "#4b4f54", textColor: "#d5d8dc" },
        { time: 89, text: "When everything feels like the movies", bgColor: "#566573", textColor: "#d5d8dc" },
        { time: 93, text: "Yeah, you bleed just to know you're alive", bgColor: "#2c3e50", textColor: "#ecf0f1" },
        { time: 98, text: "And I don't want the world to see me", bgColor: "#34495e", textColor: "#ecf0f1" },
        { time: 103, text: "'Cause I don't think that they'd understand", bgColor: "#1c2833", textColor: "#aab7b8" },
        { time: 108, text: "When everything's made to be broken", bgColor: "#2e4053", textColor: "#ecf0f1" },
        { time: 112, text: "I just want you to know who I am (it's not over yet, wait for it)", bgColor: "#5f6a6a", textColor: "#d5d8dc" },
        { time: 210, text: "And I don't want the world to see me", bgColor: "#34495e", textColor: "#ecf0f1" },
        { time: 214, text: "'Cause I don't think that they'd understand", bgColor: "#1c2833", textColor: "#aab7b8" },
        { time: 220, text: "When everything's made to be broken", bgColor: "#566573", textColor: "#d5d8dc" },
        { time: 224, text: "I just want you to know who I am", bgColor: "#2e4053", textColor: "#ecf0f1" },
        { time: 231, text: "And I don't want the world to see me", bgColor: "#3a3f47", textColor: "#dcdfe3"},
        { time: 235, text: "'Cause I don't think that they'd understand", bgColor: "#5f6a6a", textColor: "#d5d8dc" },
        { time: 240, text: "When everything's made to be broken", bgColor: "#4b4f54", textColor: "#d5d8dc" },
        { time: 245, text: "I just want you to know who I am", bgColor: "#1c2833", textColor: "#aab7b8" },
        { time: 249, text: "I just want you to know who I am", bgColor: "#34495e", textColor: "#ecf0f1" },
        { time: 254, text: "I just want you to know who I am", bgColor: "#2e4053", textColor: "#ecf0f1" },
        { time: 258, text: "I just want you to know who I am", bgColor: "#5f6a6a", textColor: "#d5d8dc" },
        {
            time: 262,
            text: "I know it might not be true, but when it rains, I like to believe it's you missing me too.",
            bgColor: "#1b2631",
            textColor: "#f7f9f9"
        },
        {
            time: 266,
            text: "Tsuki ga kirei desu ne?",
            bgColor: "#000000",
            textColor: "#f7f9f9"
        }
    ];

    let currentIndex = 0;
    let isTyping = false;

    function typeText(text, onComplete) {
        let i = 0;
        textTarget.textContent = "";
        isTyping = true;

        function type() {
            if (i < text.length) {
                textTarget.textContent += text[i++];
                setTimeout(type, 35);
            } else {
                isTyping = false;
                if (onComplete) onComplete();
            }
        }

        type();
    }

    function showLyric(lyric) {
    document.body.style.backgroundColor = lyric.bgColor;
    textTarget.style.color = lyric.textColor;
    lyricsContainer.style.opacity = 0;

    if (lyric.text.includes("when it rains")) {
            activateRain(true);
        }

    // Activate rain effect
    if (lyric.text.includes("when it rains")) {
        activateRain(true);
    }

    // Show moon and hide heading
    if (lyric.text.includes("Tsuki ga kirei")) {
        moonActive = true;

        // Hide h4
        const h4 = document.getElementById("wait");
        if (h4) h4.style.display = "none";
    }

    setTimeout(() => {
        typeText(lyric.text);
        lyricsContainer.style.opacity = 1;
    }, 400);
}


    audio.addEventListener("timeupdate", () => {
        const t = Math.floor(audio.currentTime);
        if (!isTyping && currentIndex < lyrics.length && t >= lyrics[currentIndex].time) {
            showLyric(lyrics[currentIndex]);
            currentIndex++;
        }
    });

    document.addEventListener("keydown", (e) => {
    if (e.key === "j") {
        const audio = document.getElementById("audio");
        audio.currentTime = 260;

        // Immediately jump to last lyric
        currentIndex = lyrics.findIndex(lyric => lyric.time >= 262);

        if (currentIndex !== -1) {
            showLyric(lyrics[currentIndex]);
            currentIndex++;
        }
    }
});

});

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    canvas.style("pointer-events", "none");
    canvas.style("z-index", "999"); 
}

function draw() {
    clear();

    if (rainActive) {
        if (raindrops.length < 300) {
            raindrops.push(new Raindrop());
        }
        for (let drop of raindrops) {
            drop.update();
            drop.show();
        }
    }

   if (moonActive) {
    if (stars.length === 0) setupStars(); 
    drawStars();

    moonPulse += 0.03;
    moonOpacity = 180 + sin(moonPulse) * 50;
    drawMoon();
}

}

function drawMoon() {
    if (!moonActive) return;

    let moonX;
    let moonY;
    let pulseBase;

    if (windowWidth < 600) {
        moonX = windowWidth - 50;  
        moonY = 180;               
        pulseBase = 40;         
    } else if (windowWidth < 1024) {
        moonX = windowWidth - 100;
        moonY = 135;
        pulseBase = 60;            
    } else {
        moonX = windowWidth - 100;
        moonY = 150;
        pulseBase = 60;
    }

    let pulse = sin(moonPulse) * 20 + pulseBase;

    noStroke();
    fill(255, 235, 150, 70);
    ellipse(moonX, moonY, pulse + 40, pulse + 40);

    fill(255, 235, 150, 120);
    ellipse(moonX, moonY, pulse + 20, pulse + 20);

    fill(255, 250, 210); 
    ellipse(moonX, moonY, pulse, pulse);
}


function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

class Raindrop {
    constructor() {
        this.x = random(width);
        this.y = random(-500, -50);
        this.z = random(0, 20);
        this.len = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 4, 10);
    }

    update() {
        this.y += this.yspeed;
        if (this.y > height) {
            this.y = random(-200, -100);
            this.x = random(width);
        }
    }

    show() {
        let thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(180, 180, 255, 150);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}

function activateRain(on) {
    rainActive = on;
}

let stars = [];

function setupStars() {
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: random(width),
            y: random(height / 3),
            radius: random(1, 3),
            baseAlpha: random(150, 255),
            twinkleSpeed: random(0.005, 0.02),
            twinkleOffset: random(TWO_PI)
        });
    }
}

function drawStars() {
    for (let s of stars) {
        let alpha = s.baseAlpha + sin(frameCount * s.twinkleSpeed + s.twinkleOffset) * 80;
        noStroke();
        fill(255, 255, 255, alpha);
        ellipse(s.x, s.y, s.radius, s.radius);
    }
}

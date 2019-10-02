const ANIMATION_ELEMENT_COUNT = 6;
const FRAMES = [
    [0, 0,
     0, 0,
     0, 0],
    [1, 0,
     0, 0,
     0, 1],
    [0, 0,
     1, 1,
     0, 0],
    [0, 1,
     0, 0,
     1, 0],
    [0, 0,
     0, 0,
     0, 0],
    [1, 1,
     1, 1,
     1, 1],
    [0, 0,
     0, 0,
     0, 0],
    [0, 0,
     0, 0,
     1, 1],
    [0, 0,
     1, 1,
     0, 0],
    [1, 1,
     0, 0,
     0, 0],
    [0, 0,
     0, 0,
     0, 0],
    [1, 1,
     0, 0,
     0, 0],
    [1, 1,
     1, 1,
     0, 0],
    [1, 1,
     1, 1,
     1, 1],
    [0, 0,
     1, 1,
     1, 1],
    [0, 0,
     0, 0,
     1, 1],
    [0, 0,
     0, 0,
     0, 0],
    [1, 1,
     0, 0,
     1, 1],
    [0, 0,
     1, 1,
     0, 0],
    [1, 1,
     0, 0,
     1, 1],
    [0, 0,
     1, 1,
     0, 0]
];
const FRAME_DURATION = 1500;

function displayFrame(animationElements, frame) {
    for (let i = 0; i < ANIMATION_ELEMENT_COUNT; i++) {
        animationElements[i].style.display = FRAMES[frame][i] ? "block" : "none";
    }
}

window.addEventListener("load", () => {
    let text = location.hash.substring(1);
    for (let i = 0; i < text.length; i++) {
        let filename = "";
        for (let j = 0; j < text.length; j++) {
            if (i == j)
                filename += text[j];
            else
                filename += "x";
        }
        let img = document.createElement("img");
        img.setAttribute("src", filename + ".png");
        document.body.appendChild(img);
    }
    let animationElements = [];
    for (let i = 0; i < ANIMATION_ELEMENT_COUNT; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "arr" + i + ".png");
        animationElements.push(img);
        document.body.appendChild(img);
    }
    let frame = 0;
    displayFrame(animationElements, frame);
    setInterval(() => {
        frame += 1;
        if (frame == FRAMES.length)
            frame = 0;
        displayFrame(animationElements, frame);
    }, FRAME_DURATION);
});

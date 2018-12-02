function requestFullscreen(e) {
    if (e.requestFullscreen) {
        e.requestFullscreen();
    } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen();
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
    }
}

function fullscreenElement() {
    return (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null);
}

function addFullscreenchangeEventListener(listener) {
    if (document.fullscreenElement !== undefined) {
        document.addEventListener("fullscreenchange", listener);
    } else if (document.webkitFullscreenElement !== undefined) {
        document.addEventListener("webkitfullscreenchange", listener);
    } else if (document.mozFullScreenElement !== undefined) {
        document.addEventListener("mozfullscreenchange", listener);
    } else if (document.msFullscreenElement !== undefined) {
        document.addEventListener("MSFullscreenChange", listener);
    }
}

function clearFrames() {
    Array.from(document.querySelectorAll("iframe")).forEach(frame => {
        frame.parentNode.removeChild(frame);
    });
}

window.addEventListener("load", () => {
    var form = document.getElementById("form");
    var number = document.getElementById("number");
    var style = document.getElementById("style");
    form.onsubmit = () => {
        clearFrames();
        var frame = document.createElement("iframe");
        frame.setAttribute("src", style.value + "/#" + number.value);
        document.body.appendChild(frame);
        requestFullscreen(frame);
        return false;
    };
    addFullscreenchangeEventListener(() => {
        if (!fullscreenElement()) {
            clearFrames();
        }
    });
}, false);

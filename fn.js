if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

function requestFullscreen(e, options) {
    if (e.requestFullscreen) {
        e.requestFullscreen(options);
    } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen(options);
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen(options);
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen(options);
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
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

class NoSleep {
    constructor() {
        // https://github.com/richtr/NoSleep.js/tree/f1354e49dce84a7c36117bbc4a9efbf43eb6ff3a/src
        let noSleepVideo = document.createElement("video");
        noSleepVideo.setAttribute("muted", "");
        noSleepVideo.setAttribute("title", "No Sleep");
        noSleepVideo.setAttribute("playsinline", "");
        function addSourceToVideo(element, type, data) {
            let source = document.createElement("source");
            source.src = "data:video/" + type + ";base64," + data;
            source.type = "video/" + type;
            element.appendChild(source);
        }
        addSourceToVideo(noSleepVideo, "webm", "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");
        addSourceToVideo(noSleepVideo, "mp4", "AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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");
        noSleepVideo.addEventListener("timeupdate", () => {
            if (noSleepVideo.currentTime > 0.5) {
                noSleepVideo.currentTime = Math.random();
            }
        });
        this.noSleepVideo = noSleepVideo;
    }
    enable() {
        this.noSleepVideo.play();
    }
    disable() {
        this.noSleepVideo.pause();
    }
}

window.addEventListener("load", () => {
    let form = document.querySelector("form");
    let number = form.querySelector("#number");
    let style = form.querySelector("#style");
    let submit = document.querySelector("input[type=submit]");
    let noSleep = new NoSleep();
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearFrames();
        submit.focus();
        history.pushState("running", "");
        let frame = document.createElement("iframe");
        frame.setAttribute("src", style.value + "/index.html#" + parseInt(number.value));
        document.body.appendChild(frame);
        form.classList.add("hidden");
        requestFullscreen(frame, {navigationUI: "hide"});
        noSleep.enable();
    });
    addFullscreenchangeEventListener(() => {
        if (!fullscreenElement() && history.state != null) {
            history.back();
        }
    });
    window.onpopstate = () => {
        if (history.state == null) {
            exitFullscreen();
            clearFrames();
            form.classList.remove("hidden");
            noSleep.disable();
        } else {
            history.back();
        }
    };
    window.onpopstate();
});

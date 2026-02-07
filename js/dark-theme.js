// DEPRECATED - no longer works

console.log("Revert darker dark theme on youtube");

revertTheme();
removeLargeModeFromPlayer();

function revertTheme() {

    const nodes = document.querySelectorAll("[darker-dark-theme],[darker-dark-theme-deprecate]");

    for (const node of nodes) {
        node.removeAttribute("darker-dark-theme");
        node.removeAttribute("darker-dark-theme-deprecate");
        node.setAttribute("dark-theme", "");
    }

    setTimeout(revertTheme, 1000);
    
}

function removeLargeModeFromPlayer() {
    
    const player = document.querySelector("#ytd-player .html5-video-player");

    if (player && player.classList.contains("ytp-big-mode")) {
        player.classList.remove("ytp-big-mode");
    }

    setTimeout(removeLargeModeFromPlayer, 1000);

}

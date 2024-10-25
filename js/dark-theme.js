console.log("Revert darker dark theme on youtube");

revertTheme();

function revertTheme() {

    const nodes = document.querySelectorAll("[darker-dark-theme],[darker-dark-theme-deprecate]");

    for (const node of nodes) {
        node.removeAttribute("darker-dark-theme");
        node.removeAttribute("darker-dark-theme-deprecate");
        node.setAttribute("dark-theme", "");
    }

    setTimeout(revertTheme, 1000);
    
}

myScript();

function myScript() {
    fixImages();

    const rightArrows = document.querySelectorAll("#shelf-container #right-arrow")

    rightArrows.forEach((rightArrow) => {
        rightArrow.addEventListener("click", () => {
            fixImages();
        });
    });
}

function fixImages() {
    const images = document.querySelectorAll("#content-attachment #img");

    images.forEach((image) => {
        const prevSrc = image.src;
        const newSrc = prevSrc.split("=")[0];
        if (newSrc !== '') image.src = newSrc;
        else {
            setTimeout(() => {
                const evenNewerSrc = image.src.split("=")[0];
                if (evenNewerSrc !== '') image.src = evenNewerSrc;
            }, 1000);
        }
    });
}
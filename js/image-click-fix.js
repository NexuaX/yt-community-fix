console.log("Starting NexuaX image-click-fix script!");

setTimeout(() => {
    const imageNodes = document.querySelectorAll("#content-attachment #img");

    console.log(imageNodes);
    
    imageNodes.forEach((image) => {
        image.addEventListener("click", () => {
            if (image.src === '') return;
            image.src = image.src.split("=")[0];
        });
    });
}, 500)
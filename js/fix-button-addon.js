console.log("Starting NexuaX fix-button-addon script!");

setInterval(() => {
    const postNodes = document.querySelectorAll("#main.ytd-backstage-post-renderer");

    postNodes.forEach((node) => {
        const attachmentWrapperNode = node.querySelector("#content-attachment.ytd-backstage-post-renderer");

        if (attachmentWrapperNode.previousElementSibling.tagName === "BUTTON") return;

        const imageNodes = node.querySelectorAll("#content-attachment #img");
        attachmentWrapperNode.before(createButton(imageNodes));
    });
}, 1000);

function createButton(imageNodes) {
    const element = document.createElement("button");
    element.classList.add("yt-community-fix-button");
    element.style.padding = ".3em 1em";
    element.style.alignSelf = "end";
    element.innerHTML = "FIX";
    element.addEventListener("click", () => {
        imageNodes.forEach((image) => {
            if (image.src === '') return;
            image.src = image.src.split("=")[0];
        });
    });
    return element;
}

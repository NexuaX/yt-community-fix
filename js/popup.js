
const magicButton = document.querySelector("#magicButton");

magicButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    console.log("siem");

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['js/dummy.js'],
    });
});

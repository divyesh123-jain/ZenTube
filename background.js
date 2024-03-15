// Listen for the extension to be installed
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
   });
   
   // Listen for messages from content scripts or other parts of the extension
   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggle") {
       // Handle the toggle action
       console.log('Toggle action received');
    }
   });
   
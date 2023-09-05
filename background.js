var msg = 'Hello World';

console.log(msg);

chrome.action.setBadgeText({ text:'YO' });
chrome.action.setBadgeBackgroundColor({ color : 'pink'});

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension is running!');
});


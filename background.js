chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if(changeInfo.status ==='complete' && /^http/.test(tab.url)){
    // console.log('background script')
    chrome.scripting.executeScript({
        target: {tabId},
        files: ["./content.js"]
    }).then(()=>{
        console.log("we have just injected content scrript")
    }).catch(err=>console.log(err, "error in background"))
  }
});
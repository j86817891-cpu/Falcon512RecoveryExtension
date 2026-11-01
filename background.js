chrome.action.onClicked.addListener(async tab=>{
 const url=new URL(chrome.runtime.getURL('index.html'));url.searchParams.set('tab',String(tab.id));url.searchParams.set('recovery','1');
 await chrome.tabs.create({url:url.href});
});

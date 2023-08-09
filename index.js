function executeChromeScripts() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: removeStyle
    });
  });
}

function removeStyle() {
  document.querySelectorAll('*').forEach(function(element){
    if (window.getComputedStyle(element).overflow === 'hidden') {
      element.style.setProperty('overflow', 'visible', 'important');
    }
    if (window.getComputedStyle(element).filter.includes('blur')) {
      element.style.setProperty('filter', 'blur(0)');
    }
  });
}

document.getElementById('overflow-click').addEventListener('click', function() { executeChromeScripts() });
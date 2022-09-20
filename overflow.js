/*
 * Example: https://www.gazetadopovo.com.br/parana/uso-de-mascara-em-locais-fechados-nao-e-mais-obrigatorio-no-parana/
 */
function removeStyle() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: executeFunction
    });
  });
}

function executeFunction() {
  document.querySelectorAll('*').forEach(function (element) {
    if (window.getComputedStyle(element).overflow === 'hidden') {
      element.style.setProperty('overflow', 'visible', 'important');
    }
  });
}

document.getElementById('overflow-click').addEventListener('click', removeStyle);
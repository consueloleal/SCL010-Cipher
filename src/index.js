const btnEncode = document.getElementById('btnEncode');
const btnDecode = document.getElementById('btnDecode');
const btnClean = document.getElementById('cleanTextArea');
const btnCopyText = document.getElementById('copyTextArea');

let messageToEncode,  messageToDecode;

btnEncode.addEventListener('click', () => {
	let offsetNumber = document.getElementById('offsetNumber').value;
	let toEncode = document.getElementById('messageDecodeEncode').value;
	messageToEncode = window.cipher.encode(offsetNumber, toEncode);
	document.getElementById('readResult').value = encrytMessage;


});

btnDecode.addEventListener('click', () => {
	let offsetNumber = document.getElementById('offsetNumber').value;
	let toDecode = document.getElementById('messageDecodeEncode').value;
	 messageToDecode = window.cipher.decode(offsetNumber, toDecode);
	document.getElementById('readResult').value = encryptedMessage;
});


btnClean.addEventListener('click', () => {
  document.getElementById('offsetNumber').value = "";
  document.getElementById('messageDecodeEncode').value = "";
  document.getElementById('readResult').value="";
  });

btnCopyText.addEventListener('click', () => {
  document.getElementById('readResult').select();
  document.execCommand('copy');
});






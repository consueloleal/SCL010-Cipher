window.cipher = {
  encode: (offset, messageToEncode) => {
if (offset !== undefined && messageToEncode !== undefined){
	  	encrytMessage = ""
	  	for (var i = 0; i < messageToEncode.length; i++) {
	  	  if (messageToEncode.charAt(i).match(/[a-z]/i) !== null) {
	  	    asciiNumber  = messageToEncode.charAt(i).toUpperCase().charCodeAt();
	  	    valueAscii = (asciiNumber - 65 + parseInt(offset)) % 26 + 65;
	  	  	encrytMessage += String.fromCharCode(valueAscii);
		 	  }else if ( messageToEncode.charAt(i) === " ") {
	 
	  	  	encrytMessage += " ";
	  	  }
	  	}
  	}
  },
  decode: (offset, messageToDecode) => {
   	if (offset !== undefined) {
	  	encryptedMessage= "";
	  	for (var i = 0; i < messageToDecode.length; i++) {
	  	  if (messageToDecode.charAt(i).match(/[a-z]/i) !== null) {
	  	    asciiNumber  = messageToDecode.charAt(i).toUpperCase().charCodeAt();
	  	    valueAscii = (asciiNumber + 65 - parseInt(offset)) % 26 + 65;
	  	    encryptedMessage += String.fromCharCode(valueAscii);
	  		}else if ( messageToDecode.charAt(i) === " ") {
	  	    encryptedMessage += " ";
	  	  }
	  	}
  	}
  }, 	
};

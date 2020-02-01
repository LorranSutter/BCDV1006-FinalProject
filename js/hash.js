function randomHash(size) {
	var result = [];
    var AlphaNumber = "0123456789abcdefghijklmnopqrstuvxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
    for (var i = 0 ; i < size; i++) { 
    	var  index = AlphaNumber.length * Math.random();
      result.push(AlphaNumber.charAt(index));
    }
    return(result.join(""));
}
function sendReceive(size) {
	var result = [];
    var AlphaNumber = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"; 
    for (var i = 0 ; i < size; i++) { 
    	var  index = AlphaNumber.length * Math.random();
      result.push(AlphaNumber.charAt(index));
    }
    return(result.join(""));
}

function hashTable() {
  var size = 20;
  var table = document.getElementById("table-hash");    
  for (var i = 0 ; i < 10; i++) { 
      var row = table.insertRow(0);
      var dttime = row.insertCell(0);
      var send = row.insertCell(1);
      var receive = row.insertCell(2);
      var s = sendReceive(6);
      var r = sendReceive(6);
      send = s;
      receive = r;
      var dtObj = new Date();
      var month = ('0' + (dtObj.getMonth() + 1)).slice(-2);
      var date = ('0' + dtObj.getDate()).slice(-2);
      var year = dtObj.getFullYear();
      var hours =dtObj.getHours();
      var mins =dtObj.getMinutes() + i;
      var secs =dtObj.getSeconds();
      var shortDate = year + '/' + month + '/' + date + " " + hours + ":" + mins + ":" + secs;
      row.innerHTML = randomHash(size) + shortDate + send + receive;
  }
}

hashTable();
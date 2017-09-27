function handleMessage(request)
{
    data = "key="+request.key+"&page="+request.page;

    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
       // alert(this.responseText);
   }
   xhr.open("POST","",true); // add apache server
   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
   xhr.send(data);

}

chrome.runtime.onMessage.addListener(handleMessage);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                  

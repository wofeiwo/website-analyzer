var client = new XMLHttpRequest();
client.open("HEAD", document.location.pathname, true);
client.send();

// contentScript send nodes information to extension.
// but first, it must be coverted.
function covertNodes(root){
    var iterator = document.createNodeIterator(root, NodeFilter.SHOW_ALL, null, false);
    var node = iterator.nextNode();
    var nodes = [];

    while(node){
        if(node.nodeType == 1 || node.nodeType == 3 || node.nodeType == 8){ // element
            // fix chrome bug
            // chrome blows up here if value is an input that doesn't support 
            //one of these three properties ['selectionStart', 'selectionEnd', 'selectionDirection'] (e.g. <input type="file"/>)
            if (node.nodeName == 'INPUT' || node.nodeName == 'TEXTAREA' || node.nodeName == 'FORM') {
                node = iterator.nextNode();
                continue;
            }
            nodes.push({
                "nodeName" : node.nodeName,
                "nodeValue": node.nodeValue,
                "attributes": {
                    "src": node.src,
                    "href": node.href,
                    "name": node.name,
                    "content": node.content
                },
                "nodeType": node.nodeType
            });
        }
        node = iterator.nextNode();
    }
    return nodes;
}

client.onreadystatechange = function() {
    if (document.location.hostname == 'localhost'
     || document.location.hostname.indexOf('127.0.0.') != -1
     || document.location.hostname.indexOf('192.168.') != -1
     || document.location.hostname.indexOf('10.') != -1
     || document.location.hostname.match('172\\.(1[6-9]|2\\d|3(0|1))\\.') != null
     ) {
        var hostname = null;
    }else{
        var hostname = document.location.hostname;
    }
    if (this.readyState == 2) {
        var data = {
            "header"    : this.getAllResponseHeaders(),
            "dom"       : covertNodes(document),
            "hostname"  : hostname,
            "port"      : document.location.port
        };
        if (data) chrome.extension.sendMessage(data);
    }
}

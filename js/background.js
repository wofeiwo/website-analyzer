/////////////////////////////////////////////////////////////////////////////////
//constants
/////////////////////////////////////////////////////////////////////////////////
const trimer = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g');
var technologyData = {};
// const request_url = "http://localhost:5000/website/upload" // for development
const request_url = "http://www.websth.com/website/upload"
const oses_url = "http://www.websth.com/static/app/oses.json"
const web_apps_url = "http://www.websth.com/static/app/web_apps.json"
const web_front_libraries_url = "http://www.websth.com/static/app/web_front_libraries.json"
const web_servers_url = "http://www.websth.com/static/app/web_servers.json"
const web_technologies_url = "http://www.websth.com/static/app/web_technologies.json"

/////////////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////////////
function parseHeader(raw) {
  var headers = new Array();
  var lines = raw.split("\r\n");
  for (var l in lines){
    if (lines[l].indexOf(":") != -1){
      var split = lines[l].indexOf(":");
      var key   = lines[l].substring(0, split).toLowerCase();
      var value = lines[l].substring(split + 1);
      headers[key] = value.replace(trimer, '');
    }
  }
  return headers;
}

function matchRule(data, rules) {
  for (var i = 0; i < rules.length; i++) {
    if (data[rules[i].match.toLowerCase()]) {
      var result = data[rules[i].match.toLowerCase()].match(rules[i].regex);
      // console.log(result);
      if (result){
        rules[i]['result'] = result;
        return rules[i];
      }
    }
  }
  return {
    title : "Unknown",
    icon  : "unrecognized_technology.png"
  };
}

function findNode(root, type, text, name, attr){
  // type = [
  //  1, // element 
  //  3, // text
  //  8  // comment
  // ]
  // text = reg to search
  // name = element tagName
  // attr = element attr to search

  for (var node in root){
    if(type == 1 && root[node].nodeType == type){ // element
      if (root[node].nodeName.toUpperCase() == name.toUpperCase()){
        var search_str = root[node].attributes[attr.toLowerCase()];
        if (search_str.match(text)){
          return true;
        }
      }
    }else if(root[node].nodeType == type){ // text & comment
      if (root[node].nodeValue.match(text)) {
        return true;
      }
    }
  }
  return false;
}

function getCloudJson(varname, url){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var resp = JSON.parse(xhr.responseText);
      window[varname] = resp;
    }
  }
  xhr.send();
}

function sendToCloud(techData){
  var xhr         = new XMLHttpRequest();
  var hostname    = techData.hostname;
  var port        = techData.port;
  var title       = techData.title;
  var ipaddress   = techData.ip_info.Ip;
  var geo         = techData.ip_info.City + ", " + techData.ip_info.RegionName + ", " + techData.ip_info.CountryName;
  var webserver   = techData.webserver;
  var os          = techData.os;
  var technology  = techData.technology;
  var libraries   = techData.front_libraries;
  var webapps     = techData.web_apps;
  var data = {
    'hostname'     : hostname,
    'port'         : port,
    'title'        : title,
    'ipaddress'    : ipaddress,
    'geo'          : geo,
    'technologies' : [
      {
        'category' : 'webserver',
        'title'    : webserver.title,
        'detail'   : webserver.result?webserver.result[0]:'',
        'url'      : webserver.url
      },
      {
        'category' : 'os',
        'title'    : os.title,
        'detail'   : os.result?os.result[0]:'',
        'url'      : os.url
      },
      {
        'category' : 'technology',
        'title'    : technology.title,
        'detail'   : technology.result?technology.result[0]:'',
        'url'      : technology.url
      }
    ]
  };

  for (var i in libraries) {
    data.technologies.push({
      'category' : 'front_libraries',
      'title'    : libraries[i].title,
      'url'      : libraries[i].url
    });
  }

  for (var i in webapps) {
    data.technologies.push({
      'category' : 'web_apps',
      'title'    : webapps[i].title,
      'url'      : webapps[i].url
    });
  }

  xhr.open("POST", request_url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      if (resp.status != 'ok') {
        console.log(resp);
      }
    }
  }
  xhr.send(JSON.stringify(data));
}

function storeSite(host, port) {
  var storage = chrome.storage.local;
  var now     = new Date();
  var key     = host + ':' + port;
  var struct  = {};
  struct[key] = {
    'last' : now.getTime()
  };

  storage.set(struct);
}

/////////////////////////////////////////////////////////////////////////////////
//events
/////////////////////////////////////////////////////////////////////////////////
chrome.extension.onMessage.addListener(function(data, sender) {
  technologyData[sender.tab.id] = parseHeader(data.header);
  technologyData[sender.tab.id]['raw_header'] = data.header;
  technologyData[sender.tab.id]['hostname'] = data.hostname;
  technologyData[sender.tab.id]['port'] = data.port || 80;
  technologyData[sender.tab.id]['title'] = sender.tab.title;
  var root = data.dom;
  var alt = "Unknown technology";
  var ico = "unrecognized_technology.png";
  var show_icon = localStorage["icon"];

  // handle localstorage
  var key = technologyData[sender.tab.id]['hostname'] + ':' + technologyData[sender.tab.id]['port'];
  var storage = chrome.storage.local;
  var now = new Date();
  storage.get(key, function(struct) {
    if (struct[key]) {
      var last = new Date(struct[key]['last']);
      var diff = now - last;
      if (diff >= (24*60*60*1000)) { // over one day.
        technologyData[sender.tab.id]['is_upload'] = true;
      }else if((now - new Date(now.getFullYear(), now.getMonth(), now.getDate())) < diff) { // if history before current day 00:00.
        technologyData[sender.tab.id]['is_upload'] = true;
      }else if(diff < 1000){ // never visited.
        technologyData[sender.tab.id]['is_upload'] = true;
      }else{
        technologyData[sender.tab.id]['is_upload'] = false;
      }
    }else{ // never recorded. means never visited.
      technologyData[sender.tab.id]['is_upload'] = true;
    }

    if (localStorage["upload_server"] == false) {
      technologyData[sender.tab.id]['is_upload'] = false;
    }
  });

  storeSite(technologyData[sender.tab.id]['hostname'], technologyData[sender.tab.id]['port']);

  // handle ip
  if(data.hostname != null){
    // get server ip informations.
    var xhr = new XMLHttpRequest();
    // var request_url = "http://api.ipinfodb.com/v2/ip_query.php?key=5eb5b4de91741e2e4b98748989dc84f3236b55f6dd38aa689921884867536f36&ip=" + data.hostname + "&output=json&timezone=false"
    var request_url = "http://api.ipinfodb.com/v3/ip-city/?key=5eb5b4de91741e2e4b98748989dc84f3236b55f6dd38aa689921884867536f36&ip=" + data.hostname + "&format=json&timezone=false"
    xhr.open("GET", request_url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        // console.log(resp);
        technologyData[sender.tab.id]['ip_info'] = resp;

        // upload server info to cloud? must be here
        if (technologyData[sender.tab.id]['is_upload']) {
          sendToCloud(technologyData[sender.tab.id]);
        }
      }
    }
    xhr.send();
  }

  // match web technologies
  var technology = matchRule(technologyData[sender.tab.id], web_technologies);
  technologyData[sender.tab.id]['technology'] = technology;

  // match web server
  var webserver = matchRule(technologyData[sender.tab.id], web_servers);
  technologyData[sender.tab.id]['webserver'] = webserver;

  // match os
  var os = matchRule(technologyData[sender.tab.id], oses);
  technologyData[sender.tab.id]['os'] = os;

  // match web front libraries
  var front_libraries = []
  for (var i in web_front_libraries) {
    for (var j in web_front_libraries[i]['rules']) {
      if (findNode(root, web_front_libraries[i]['rules'][j].type, web_front_libraries[i]['rules'][j].match, web_front_libraries[i]['rules'][j].name, web_front_libraries[i]['rules'][j].attributes)) {
        front_libraries.push(web_front_libraries[i]);
        break;
      }
    }
  }
  technologyData[sender.tab.id]['front_libraries'] = front_libraries;

  // match web apps
  var apps = []
  for (var i in web_apps) {
    for (var j in web_apps[i]['rules']) {
      if (findNode(root, web_apps[i]['rules'][j].type, web_apps[i]['rules'][j].match, web_apps[i]['rules'][j].name, web_apps[i]['rules'][j].attributes)) {
        apps.push(web_apps[i]);
        break;
      }
    }
  }
  technologyData[sender.tab.id]['web_apps'] = apps;

  // choose pageAction icon
  switch (show_icon) {
      case "webserver":
        alt = webserver.title;
        ico = webserver.icon;
        break;
      case "technology":
        alt = technology.title;
        ico = technology.icon;
        break;
      case "os":
        alt = os.title;
        ico = os.icon;
        break;
      case "webapp":
        if (apps[0]) {
          alt = apps[0].title;
          ico = apps[0].icon;
        }
        break;
      default:
        alt = webserver.title;
        ico = webserver.icon;
        break;
  }

  // set up page action
  chrome.pageAction.setIcon({
    tabId: sender.tab.id, 
    path: "icons/" + ico
  });
  chrome.pageAction.setTitle({
    tabId: sender.tab.id, 
    title: alt
  });
  chrome.pageAction.show(sender.tab.id);
});

chrome.tabs.onRemoved.addListener(function(tabId) {
  delete technologyData[tabId];
});

chrome.runtime.onInstalled.addListener(function(detail) {
  if (detail.reason == 'install') {
    chrome.tabs.create({
      'url' : 'options.html'
    });
  }
});

/////////////////////////////////////////////////////////////////////////////////
//Run
/////////////////////////////////////////////////////////////////////////////////
// load all cloud data to replace local rules.
getCloudJson('oses', oses_url);
getCloudJson('web_apps', web_apps_url);
getCloudJson('web_front_libraries', web_front_libraries_url);
getCloudJson('web_servers', web_servers_url);
getCloudJson('web_technologies', web_technologies_url);

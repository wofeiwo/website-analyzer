function main() {
  chrome.tabs.getSelected(null, function(tab) {
    var data = chrome.extension.getBackgroundPage().technologyData[tab.id];
    // console.log(data);
    if (data['ip_info']) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML =  "<strong>";
        td1.innerHTML += chrome.i18n.getMessage("ip");
        td1.innerHTML += "</strong>";
        var td2 = document.createElement('td');
        // td2.innerHTML = data['ip_info']['Ip'];
        td2.innerHTML = "<img class=\"img\" width=\"19px\" hight=\"19px\" src=\"flags/" + data['ip_info']['CountryCode'].toLowerCase() + ".gif\">";
        var td3 = document.createElement('td');
        // td3.innerHTML = data['ip_info']['City'] + ", " + data['ip_info']['RegionName'] + ", " + data['ip_info']['CountryName'];
        td3.innerHTML = data['ip_info']['Ip'] + "/" + data['ip_info']['City'] + ", " + data['ip_info']['RegionName'] + ", " + data['ip_info']['CountryName'];

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById("detail").appendChild(tr);
    }

    if (data['technology']) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML =  "<strong>";
        td1.innerHTML += chrome.i18n.getMessage("webTechnology");
        td1.innerHTML += "</strong>";
        var td2 = document.createElement('td');
        if (data['technology'].url) {
            // td2.innerHTML = "<a href=\"" + data['technology_url'] + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['technology_icon'] + "\" />&nbsp;&nbsp;" + data['technology'] + "</a>";
            td2.innerHTML = "<a href=\"" + data['technology'].url + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['technology'].icon + "\" title=\"" + data['technology'].title + "\"></a>";
        }else{
            td2.innerHTML = "<img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['technology'].icon + "\" title=\"" + data['technology'].title + "\">";
        }
        var td3 = document.createElement('td');
        if (data['technology'].result) {
            td3.innerHTML = data['technology'].result[0];
        }else{
            td3.innerHTML = data['technology'].title;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById("detail").appendChild(tr);
    }

    if (data['server']) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML =  "<strong>";
        td1.innerHTML += chrome.i18n.getMessage("webserver");
        td1.innerHTML += "</strong>";
        var td2 = document.createElement('td');
        if (data['webserver'].url) {
            // td2.innerHTML = "<a href=\"" + data['webserver_url'] + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['webserver_icon'] + "\" />&nbsp;&nbsp;" + data['webserver'] + "</a>";
            td2.innerHTML = "<a href=\"" + data['webserver'].url + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['webserver'].icon + "\" title=\"" + data['webserver'].title + "\"></a>";
        }else{
            td2.innerHTML = "<img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['webserver'].icon + "\" title=\"" + data['webserver'].title + "\">";
        }
        var td3 = document.createElement('td');
        if (data['webserver'].result) {
            td3.innerHTML = data['webserver'].result[0];
        }else{
            td3.innerHTML = data['webserver'].title;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById("detail").appendChild(tr);
    }

    if (data['os']) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML =  "<strong>";
        td1.innerHTML += chrome.i18n.getMessage("os");
        td1.innerHTML += "</strong>";
        var td2 = document.createElement('td');
        if (data['os'].url) {
            // td2.innerHTML = "<a href=\"" + data['os_url'] + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['os_icon'] + "\" />&nbsp;&nbsp;" + data['os'] + "</a>";
            td2.innerHTML = "<a href=\"" + data['os'].url + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['os'].icon + "\" title=\"" + data['os'].title + "\"></a>";
        }else{
            td2.innerHTML = "<img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['os'].icon + "\" title=\"" + data['os'].title + "\">";
        }
        var td3 = document.createElement('td');
        if (data['os'].result) {
            td3.innerHTML = data['os'].result[0];
        }else{
            td3.innerHTML = data['os'].title;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById("detail").appendChild(tr);
    }

    if (data['front_libraries'].length != 0) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML =  "<strong>";
        td1.innerHTML += chrome.i18n.getMessage("frontLibraries");
        td1.innerHTML += "</strong>";
        var td2 = document.createElement('td');
        td2.setAttribute("colspan", "2");
        for (var i in data['front_libraries']) {
            if (data['front_libraries'][i].url){
                // td2.innerHTML += "<a href=\"" + data['front_libraries'][i].url + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['front_libraries'][i].icon + "\" />&nbsp;&nbsp;" + data['front_libraries'][i].title + "</a>";
                td2.innerHTML += "<a href=\"" + data['front_libraries'][i].url + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['front_libraries'][i].icon + "\" title=\"" + data['front_libraries'][i].title + "\" />&nbsp;" + data['front_libraries'][i].title + "</a>&nbsp;&nbsp;";
            }else{
                td2.innerHTML += "<img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['front_libraries'][i].icon + "\" />&nbsp;" + data['front_libraries'][i].title + "&nbsp;&nbsp;";
            }
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById("detail").appendChild(tr);
    }

    if (data['web_apps'].length != 0) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML =  "<strong>";
        td1.innerHTML += chrome.i18n.getMessage("webApps");
        td1.innerHTML += "</strong>";
        var td2 = document.createElement('td');
        td2.setAttribute("colspan", "2");
        for (var i in data['web_apps']) {
            if (data['web_apps'][i].url){
                // td2.innerHTML += "<a href=\"" + data['web_apps'][i].url + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['web_apps'][i].icon + "\" />&nbsp;&nbsp;" + data['web_apps'][i].title + "</a>";
                td2.innerHTML += "<a href=\"" + data['web_apps'][i].url + "\" target=\"_blank\"><img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['web_apps'][i].icon + "\" title=\"" + data['web_apps'][i].title + "\" />&nbsp;" + data['web_apps'][i].title + "</a>&nbsp;&nbsp;";
            }else{
                td2.innerHTML += "<img class=\"img\" width=\"19px\" hight=\"19px\" src=\"icons/" + data['web_apps'][i].icon + "\" />&nbsp;" + data['web_apps'][i].title + "&nbsp;&nbsp;";
            }
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById("detail").appendChild(tr);
    }
  });
}

function showHeader() {
    chrome.tabs.getSelected(null, function(tab) {
        var data = chrome.extension.getBackgroundPage().technologyData[tab.id];
        if (data['raw_header']) {
            document.getElementById('debug').innerText = data['raw_header'];
            document.getElementById('debug').style.display = "";
            document.getElementById('show_header').innerHTML = "<i class=\"icon-eye-close\"></i>";
            document.getElementById('show_header').removeEventListener('click', showHeader);
            document.getElementById('show_header').addEventListener('click', hideHeader);
        }
    });
}

function hideHeader() {
    chrome.tabs.getSelected(null, function(tab) {
        document.getElementById('debug').style.display = "none";
        document.getElementById('show_header').innerHTML = "<i class=\"icon-eye-open\"></i>";
        document.getElementById('show_header').removeEventListener('click', hideHeader);
        document.getElementById('show_header').addEventListener('click', showHeader);
    });
}

window.addEventListener('load', main);
document.getElementById('show_header').addEventListener('click', showHeader);

// set i18n locale strings.
document.getElementById('tabCategory').innerText = chrome.i18n.getMessage("tabCategory");
document.getElementById('tabTechnology').innerText = chrome.i18n.getMessage("tabTechnology");
document.getElementById('tabDetail').innerText = chrome.i18n.getMessage("tabDetail");
document.getElementById('btnOptions').setAttribute("title", chrome.i18n.getMessage("btnOptions"));
document.getElementById('show_header').setAttribute("title", chrome.i18n.getMessage("btnShowHeader"));
document.getElementById('cloud_search').setAttribute("title", chrome.i18n.getMessage("btnCloudSearch"));
// document.getElementById('btnSource').innerText = chrome.i18n.getMessage("btnSource");
document.getElementById('btnIssue').setAttribute("title", chrome.i18n.getMessage("btnIssue"));
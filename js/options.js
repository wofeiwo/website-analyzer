// 将选项保存至 localStorage.
function save_options() {
  var select = document.getElementById("icons");
  var icon = select.children[select.selectedIndex].value;
  localStorage["icon"] = icon;

  var checkbox = document.getElementById("upload_server");
  localStorage["upload_server"] = checkbox.checked;

  // 更新状态告诉用户选项已保存。
  var status = document.getElementById("status");
  status.innerHTML = "<i class=\"icon-ok\"></i>";
  status.innerHTML += "选项已保存。";
}

// 从保存在 localStorage 中的值恢复选定的内容。
function restore_options() {
  var icon = localStorage["icon"];
  if (icon) {
    var select = document.getElementById("icons");
    for (var i = 0; i < select.children.length; i++) {
      var child = select.children[i];
      if (child.value == icon) {
        child.setAttribute("selected", "true");
        break;
      }
    }
  }

  var checkbox = document.getElementById("upload_server");
  var checked = localStorage["upload_server"];
  if (checked){
    checkbox.setAttribute("checked", "true");
  }
}

function close_options(){
  chrome.tabs.getCurrent(function(tab){
    chrome.tabs.remove(tab.id);
  });
}

document.addEventListener('DOMContentReady', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('close').addEventListener('click', close_options);
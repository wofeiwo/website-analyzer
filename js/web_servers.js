var web_servers = [
  {
    "icon" : "4d_webstar_s.gif",
    "title": "4D WebSTAR",
    "match": "Server",
    "regex": "^4D_WebSTAR_S.*"
  },
  {
    "icon" : "aolserver.gif",
    "title": "AOLserver",
    "match": "Server",
    "regex": "^AOLserver.*",
    "url"  : "http://www.aolserver.com"
  },
  {
    "icon" : "apusic.ico",
    "title": "Apusic Application Server",
    "match": "Server",
    "regex": "Apusic Application Server/?([\\d.]+)?",
    "url"  : "http://www.apusic.com/products/server.faces"
  },
  {
    "icon" : "abyss.gif",
    "title": "Abyss",
    "match": "Server",
    "regex": "^Abyss.*",
    "url"  : "http://www.aprelium.com/abyssws/"
  },
  {
    "icon" : "gunicorn.png",
    "title": "Gunicorn",
    "match": "Server",
    "regex": "^gunicorn.*",
    "url"  : "http://gunicorn.org"
  },
  {
    "icon" : "antiweb.gif",
    "title": "Anti-Web HTTPD",
    "match": "Server",
    "regex": "^Antiweb.*",
    "url"  : "http://www.hcsw.org/awhttpd/"
  },
  {
    "icon": "apache.ico",
    "title": "Apache Traffic Server",
    "match": "Server",
    "regex": "ATS/?([\\d.]+)?",
    "url"  : "http://tomcat.apache.org"
  },
  {
    "icon": "tomcat.png",
    "title": "Tomcat",
    "match": "Server",
    "regex": "^Apache-Coyote.*",
    "url"  : "http://tomcat.apache.org"
  },
  {
    "icon": "nginx.gif",
    "title": "Tengine Webserver, Taobao version nginx",
    "match": "Server",
    "regex": "Tengine/?([\\d.]+)?",
    "url"  : "http://tengine.taobao.org/"
  },
  {
    "icon": "apache.ico",
    "title": "Apache",
    "match": "Server",
    "regex": "Apache/?([\\d.]+)?",
    "url"  : "http://httpd.apache.org"
  },
  {
    "icon": "badblue.gif",
    "title": "BadBlue",
    "match": "Server",
    "regex": "^BadBlue.*",
    "url"  : "http://www.badblue.com/prod.htm"
  },
  {
    "icon": "barracudadrive.gif",
    "title": "BarracudaDrive",
    "match": "Server",
    "regex": "^BarracudaServer.*",
    "url"  : "http://barracudadrive.com/"
  },
  {
    "icon": "boa.gif",
    "title": "Boa",
    "match": "Server",
    "regex": "^Boa.*",
    "url"  : "http://www.boa.org/"
  },
  {
    "icon": "caudium.gif",
    "title": "Caudium",
    "match": "Server",
    "regex": "^Caudium.*",
    "url"  : "http://caudium.net/space/start"
  },
  {
    "icon": "cherokee.gif",
    "title": "Cherokee",
    "match": "Server",
    "regex": "Cherokee/?([\\d.]+)?",
    "url"  : "http://www.cherokee-project.com/"
  },
  {
    "icon": "cisco.gif",
    "title": "Cisco",
    "match": "Server",
    "regex": "^Virata.*",
    "url"  : "http://www.cisco.com"
  },
  {
    "icon": "flexwatch.gif",
    "title": "FlexWATCH",
    "match": "Server",
    "regex": "^GoAhead.*",
    "url"  : "http://www.flexwatch.com/"
  },
  {
    "icon": "gatling.gif",
    "title": "Gatling",
    "match": "Server",
    "regex": "Gatling/?([\\d.]+)?",
    "url"  : "http://www.fefe.de/gatling/"
  },
  {
    "icon": "hiawatha.gif",
    "title": "Hiawatha",
    "match": "Server",
    "regex": "^Hiawatha.*",
    "url"  : "http://www.hiawatha-webserver.org/"
  },
  {
    "icon": "ibm.ico",
    "title": "IBM HTTP Server",
    "match": "Server",
    "regex": "^IBM.*",
    "url"  : "http://www.ibm.com/software/webservers/httpservers/"
  },
  {
    "icon": "icewarp.gif",
    "title": "IceWarp",
    "match": "Server",
    "regex": "IceWarp/?([\\d.]+)?",
    "url"  : "http://www.icewarp.com/"
  },
  {
    "icon": "jana.gif",
    "title": "Jana-Server",
    "match": "Server",
    "regex": "^Jana-Server.*",
    "url"  : "http://www.janaserver.de/"
  },
  {
    "icon": "jetty.gif",
    "title": "Jetty",
    "match": "Server",
    "regex": "^Jetty.*",
    "url"  : "http://jetty.codehaus.org"
  },
  {
    "icon": "konica.gif",
    "title": "Konica Allegro",
    "match": "Server",
    "regex": "^Allegro.*"
  },
  {
    "icon": "linksys.gif",
    "title": "Linksys",
    "match": "Server",
    "regex": "Linksys",
    "url"  : "http://www.linksys.com"
  },
  {
    "icon": "litespeed.gif",
    "title": "LiteSpeed Web Server",
    "match": "Server",
    "regex": "^LiteSpeed.*",
    "url"  : "http://www.litespeed.com"
  },
  {
    "icon": "lotus_domino_go_webserver.gif",
    "title": "Lotus Domino Go Webserver",
    "match": "Server",
    "regex": "^Domino-Go-Webserver.*",
    "url": "http://www.ibm.com/software/lotus/products/domino/"
  },
  {
    "icon": "ibm.ico",
    "title": "IBM Lotus Domino",
    "match": "Server",
    "regex": "^Lotus-Domino.*",
    "url": "http://www.ibm.com/software/lotus/products/domino/"
  },
  {
    "icon": "microsoft_iis.ico",
    "title": "Microsoft IIS",
    "match": "Server",
    "regex": "^Microsoft-IIS.*",
    "url"  : "http://www.iis.net"
  },
  {
    "icon": "mongrel.gif",
    "title": "Mongrel",
    "match": "Server",
    "regex": "^Mongrel.*",
    "url"  : "http://mongrel2.org/"
  },
  {
    "icon": "net2phone.gif",
    "title": "Net2Phone Rapid Logic",
    "match": "Server",
    "regex": "^Rapid Logic.*"
  },
  {
    "icon": "netbotz.gif",
    "title": "NetBotz",
    "match": "Server",
    "regex": "^thttpd.*"
  },
  {
    "icon": "netgear.gif",
    "title": "Netgear",
    "match": "Server",
    "regex": "^ZyXEL.*"
  },
  {
    "icon": "netopia.gif",
    "title": "Netopia Router Allegro RomPager",
    "match": "Server",
    "regex": "^Allegro-Software-RomPager.*"
  },
  {
    "icon": "netscape.gif",
    "title": "Netscape",
    "match": "Server",
    "regex": "^Netscape.*"
  },
  {
    "icon": "omnihttpd.gif",
    "title": "OmniHTTPd",
    "match": "Server",
    "regex": "^OmniHTTPd.*"
  },
  {
    "icon": "oracle.ico",
    "title": "Java Web Start Technology",
    "match": "Server",
    "regex": "^JWS.*"
  },
  {
    "icon": "oracle.ico",
    "title": "Oracle Application Server",
    "match": "Server",
    "regex": "^Oracle.*"
  },
  {
    "icon": "packetshaper.gif",
    "title": "PacketShaper",
    "match": "Server",
    "regex": "^httpd.*"
  },
  {
    "icon": "philips.gif",
    "title": "Philips NetCam",
    "match": "Server",
    "regex": "^wg_httpd.*"
  },
  {
    "icon": "play_framework.png",
    "title": "Play! Framework",
    "match": "Server",
    "regex": "^Play.*"
  },
  {
    "icon": "qnap.gif",
    "title": "QNAP",
    "match": "Server",
    "regex": "^http server.*"
  },
  {
    "icon": "resin.gif",
    "title": "Resin",
    "match": "Server",
    "regex": "Resin/?([\\d.]+)?",
    "url"  : "http://www.caucho.com/resin-application-server/"
  },
  {
    "icon": "ricoh_aficio.gif",
    "title": "Ricoh Aficio",
    "match": "Server",
    "regex": "^Web-Server.*"
  },
  {
    "icon": "roxen.gif",
    "title": "Roxen",
    "match": "Server",
    "regex": "^Roxen.*",
    "url"  : "http://www.roxen.com/products/cms/webserver/"
  },
  {
    "icon": "snap.gif",
    "title": "Snap",
    "match": "Server",
    "regex": "^SnapStream.*"
  },
  {
    "icon": "snap.gif",
    "title": "Sony SNC",
    "match": "Server",
    "regex": "^NetEVI.*"
  },
  {
    "icon": "squid.gif",
    "title": "Squid",
    "match": "Server",
    "regex": "^squid.*",
    "url"  : "http://www.squid-cache.org/"
  },
  {
    "icon": "sun_java_system.gif",
    "title": "Sun",
    "match": "Server",
    "regex": "^Sun-.*",
    "url"  : "http://www.sun.com"
  },
  {
    "icon": "tclhttpd.gif",
    "title": "TclHttpd",
    "match": "Server",
    "regex": "^Tcl-Webserver.*"
  },
  {
    "icon": "userland.gif",
    "title": "UserLand Frontier",
    "match": "Server",
    "regex": "^UserLand.*"
  },
  {
    "icon": "virtuoso.gif",
    "title": "Virtuoso",
    "match": "Server",
    "regex": "^Virtuoso.*"
  },
  {
    "icon": "wdaemon.gif",
    "title": "WDaemon",
    "match": "Server",
    "regex": "^WDaemon.*"
  },
  {
    "icon": "webrick.gif",
    "title": "WEBrick",
    "match": "Server",
    "regex": "^WEBrick.*"
  },
  {
    "icon": "wn_server.gif",
    "title": "WN Server",
    "match": "Server",
    "regex": "^WN.*"
  },
  {
    "icon": "wallbotz.gif",
    "title": "WallBotz",
    "match": "Server",
    "regex": "^thttpd.*"
  },
  {
    "icon": "yaws.gif",
    "title": "Yaws",
    "match": "Server",
    "regex": "^Yaws.*"
  },
  {
    "icon": "jiasule.gif",
    "title": "加速乐 WAF",
    "match": "Server",
    "regex": "jiasule-WAF.*",
    "url"  : "http://www.jiasule.com"
  },
  {
    "icon": "anquanbao.ico",
    "title": "安全宝 WAF",
    "match": "Server",
    "regex": "ASERVER/?([\\d.]+)?",
    "url"  : "http://anquanbao.com"
  },
  {
    "icon": "anquanbao.ico",
    "title": "安全宝 WAF",
    "match": "X-Powered-By-Anquanbao",
    "regex": "HIT",
    "url"  : "http://anquanbao.com"
  },
  {
    "icon": "zope.gif",
    "title": "Zope",
    "match": "Server",
    "regex": "^Zope.*"
  },
  {
    "icon": "zyxel.gif",
    "title": "Zyxel",
    "match": "Server",
    "regex": "^RomPager.*"
  },
  {
    "icon": "zend_server.ico",
    "title": "Zend Server",
    "match": "X-Powered-By",
    "regex": "^Zend Core.*",
    "url": "http://www.zend.com/"
  },
  {
    "icon": "and_httpd.gif",
    "title": "and-httpd",
    "match": "Server",
    "regex": "^and-httpd.*"
  },
  {
    "icon": "emule.gif",
    "title": "eMule",
    "match": "Server",
    "regex": "^eMule.*",
    "url"  : "http://www.emule-project.net/"
  },
  {
    "icon": "router.jpg",
    "title": "Router Webserver",
    "match": "Server",
    "regex": "^Router.*"
  },
  {
    "icon": "lighttpd.ico",
    "title": "Lighttpd",
    "match": "Server",
    "regex": "lighttpd/?([\\d.]+)?",
    "url"  : "http://www.lighttpd.net"
  },
  {
    "icon": "nginx.gif",
    "title": "Nginx",
    "match": "Server",
    "regex": "nginx/?([\\d.]+)?",
    "url"  : "http://nginx.org"
  },
  {
    "icon": "publicfile.gif",
    "title": "publicfile",
    "match": "Server",
    "regex": "^publicfile.*"
  },
  {
    "icon": "thttpd.gif",
    "title": "thttpd",
    "match": "Server",
    "regex": "^thttpd.*"
  },
  {
    "icon": "webcamxp.gif",
    "title": "webcamXP PRO",
    "match": "Server",
    "regex": "^webcamXP.*"
  },
  {
    "icon": "google.ico",
    "title": "Google Web Server",
    "match": "Server",
    "regex": "^(gws|GSE).*",
    "url"  : "http://www.google.com"
  },
  {
    "icon": "google.ico",
    "title": "Google App Engine",
    "match": "Server",
    "regex": "Google Frontend",
    "url"  : "http://www.google.com"
  },
  {
    "icon": "baidu.ico",
    "title": "Baidu Web Server",
    "match": "Server",
    "regex": "^BWS.*",
    "url"  : "http://www.baidu.com"
  },
  {
    "icon": "tencent.ico",
    "title": "Tencent Web Server",
    "match": "Server",
    "regex": "^TWS.*",
    "url"  : "http://www.tencent.com"
  },
  {
    "icon": "jigsaw.ico",
    "title": "Jigsaw",
    "match": "Server",
    "regex": "^jigsaw.*"
  },
  {
    "icon": "github.ico",
    "title": "GitHub",
    "match": "Server",
    "url"  : "https://github.com",
    "regex": "^GitHub.*"
  },
  {
    "icon": "thin.png",
    "title": "Thin",
    "match": "Server",
    "regex": "^thin.*"
  },
  {
    "icon": "varnish.jpg",
    "title": "Varnish Cache",
    "match": "Via",
    "url"  : "https://www.varnish-cache.org",
    "regex": "varnish.*"
  },
  {
    "icon": "x5.png",
    "title": "X5",
    "match": "Server",
    "regex": "^X5.*"
  },
  {
    "icon": "cloudflare.png",
    "title": "CloudFlare",
    "match": "Server",
    "regex": "cloudflare"
  },
  {
    "icon": "zeus.ico",
    "title": "Zeus Web Server",
    "match": "Server",
    "url"  : "http://www.zeus.com",
    "regex": "^Zeus.*"
  },
  {
    "icon": "couchdb.ico",
    "title": "Apache CouchDB",
    "match": "Server",
    "url"  : "http://couchdb.apache.org",
    "regex": "CouchDB/([\\d.]+)?"
  },
  {
    "icon": "python.ico",
    "title": "Python Werkzeug",
    "match": "Server",
    "url"  : "http://werkzeug.pocoo.org",
    "regex": "Werkzeug/([\\d.]+)?"
  }
];
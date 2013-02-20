var web_front_libraries = [
    {
        "icon": "jquery.jpg",
        "title": "jQuery UI",
        "url" : "http://jqueryui.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": /jquery-ui.*/i
            }
        ]
    },
    {
        "icon": "bootstrap.jpg",
        "title": "Bootstrap",
        "url" : "http://twitter.github.com/bootstrap/",
        "rules": [
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": /bootstrap.*/i
            }
        ]
    },
    {
        "icon": "backbonejs.jpg",
        "title": "Backbone.js",
        "url" : "http://backbonejs.org/",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "backbone.*\\.js"
            }
        ]
    },,
    {
        "icon": "swfupload.gif",
        "title": "swfupload",
        "url" : "http://code.google.com/swfupload/",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "swfupload.js"
            }
        ]
    },
    {
        "icon": "fckeditor.png",
        "title": "FCKeditor",
        "url" : "http://sourceforge.net/fckeditor/",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "fckeditor.js"
            }
        ]
    },
    {
        "icon": "jquery.jpg",
        "title": "jQuery",
        "url" : "http://jquery.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": /jquery.*/i
            }
        ]
    },
    {
        "icon": "dojo.jpg",
        "title": "Dojo",
        "url" : "http://dojotoolkit.org",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "([\\d.]+)/dojo/dojo(\\.xd)?\\.js"
            }
        ]
    },
    {
        "icon": "extjs.ico",
        "title": "ExtJS",
        "url" : "http://www.sencha.com/products/extjs",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "ext-base\\.js"
            }
        ]
    },
    {
        "icon": "google.ico",
        "title": "Google Font API",
        "url" : "https://developers.google.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "googleapis.com/.+webfont"
            }
        ]
    },
    {
        "icon": "google.ico",
        "title": "Google Maps",
        "url" : "http://maps.google.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "(maps\\.google\\.com/maps\\?file=api(&v=([\\d.]+))?|maps\\.google\\.com/maps/api/staticmap)"
            }
        ]
    },
    {
        "icon": "highcharts.ico",
        "title": "Highcharts",
        "url" : "http://www.highcharts.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "highcharts.*\\.js"
            }
        ]
    },
    {
        "icon": "mootools.ico",
        "title": "MooTools",
        "url" : "http://mootools.net",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "mootools.*\\.js"
            }
        ]
    },
    {
        "icon": "prototype.ico",
        "title": "Prototype",
        "url" : "http://prototypejs.org",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "(prototype|protoaculous)(-([\\d.]*[\\d]))?.*\\.js"
            }
        ]
    },
    {
        "icon": "yui.ico",
        "title": "Yahoo YUI",
        "url" : "http://yuilibrary.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "/yui/|yui\\.yahooapis\\.com"
            }
        ]
    }
]
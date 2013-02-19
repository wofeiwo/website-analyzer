var web_apps = [
    {
        "icon": "discuz.jpg",
        "title": "Discuz!",
        "url"  : "http://www.discuz.net",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "logging\.js"
            },
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "Discuz\!"
            },
            {
                "type": 1,
                "name": "A",
                "attributes": "href",
                "match": "^home.php\?mod=space"
            }
        ]
    },
    {
        "icon": "phpwind.ico",
        "title": "PHPWind",
        "url" : "http://www.phpwind.net",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "^phpwind.*"
            }
        ]
    },
    {
        "icon": "phpmyadmin.ico",
        "title": "PHPMyAdmin",
        "url" : "http://www.phpmyadmin.net",
        "rules": [
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "phpmyadmin.css.php"
            },
            {
                "type": 3,
                "name": "TITLE",
                "attributes": "",
                "match": "^phpMyAdmin.*"
            }
        ]
    },
    {
        "icon": "wordpress.jpg",
        "title": "WordPress",
        "url" : "http://www.wordpress.com",
        "rules": [
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "wp-content.*"
            }
        ]
    },
    {
        "icon": "joomla.ico",
        "title": "Joomla!",
        "url" : "http://www.joomla.org",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "^Joomla.*"
            },
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "\/templates\/joomla.*"
            }
        ]
    },
    {
        "icon": "phpcms.jpg",
        "title": "PHPCMS",
        "url" : "http://www.phpcms.com",
        "rules": [
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "phpcms.*"
            }
        ]
    },
    {
        "icon": "dedecms.jpg",
        "title": "DeDeCMS",
        "url" : "http://www.dedecms.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "dedeajax.*"
            }
        ]
    }
]
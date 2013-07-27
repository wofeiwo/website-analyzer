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
                "match": "logging\\.js"
            },
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "Discuz\\!"
            },
            {
                "type": 3,
                "name": "TITLE",
                "attributes": "",
                "match": "Powered by Discuz\\!"
            },
            {
                "type": 1,
                "name": "A",
                "attributes": "href",
                "match": "^home.php\\?mod=space"
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
        "icon": "zblog.png",
        "title": "Z-Blog",
        "url" : "http://www.rainbowsoft.org",
        "rules": [
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "zb_users.*"
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
                "match": "/templates/joomla.*"
            }
        ]
    },
    {
        "icon": "jira.jpg",
        "title": "Atlassian Jira",
        "url" : "http://www.atlassian.com/software/jira/",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "/jira/s/"
            }
        ]
    },
    {
        "icon": "bugzilla.jpg",
        "title": "Bugzilla",
        "url" : "http://www.bugzilla.org",
        "rules": [
            {
                "type": 1,
                "name": "A",
                "attributes": "href",
                "match": "enter_bug\\.cgi"
            }
        ]
    },
    {
        "icon": "blogger.jpg",
        "title": "Blogger",
        "url" : "http://www.blogger.com",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "blogger"
            }
        ]
    },
    {
        "icon": "struts.jpg",
        "title": "Struts1",
        "url" : "http://struts.apache.org",
        "rules": [
            {
                "type": 1,
                "name": "A",
                "attributes": "href",
                "match": "\\.do\\??"
            }
        ]
    },
    {
        "icon": "struts.jpg",
        "title": "Struts2",
        "url" : "http://struts.apache.org",
        "rules": [
            {
                "type": 1,
                "name": "A",
                "attributes": "href",
                "match": "\\.action\\??"
            }
        ]
    },
    {
        "icon": "awstats.jpg",
        "title": "AWStats",
        "url" : "http://awstats.sourceforge.net",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "AWStats ([\\d.]+( \\(build [\\d.]+\\))?)"
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
    },
    {
        "icon": "cpanel.jpg",
        "title": "cPanel",
        "url" : "http://cpanel.net",
        "rules": [
            {
                "type": 8,
                "name": "",
                "attributes": "",
                "match": "cPanel"
            }
        ]
    },
    {
        "icon": "disqus.jpg",
        "title": "Disqus",
        "url" : "http://disqus.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "disqus_url"
            }
        ]
    },
    {
        "icon": "django.ico",
        "title": "Django | The Web framework for perfectionists with deadlines",
        "url" : "http://djangoproject.com",
        "rules": [
            {
                "type": 1,
                "name": "INPUT",
                "attributes": "name",
                "match": "csrfmiddlewaretoken"
            }
        ]
    },
    {
        "icon": "dokuwiki.jpg",
        "title": "DokuWiki",
        "url" : "http://www.DokuWiki.org",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "DokuWiki( Release [\\-\\d]+)?"
            }
        ]
    },
    {
        "icon": "drupal.jpg",
        "title": "Drupal",
        "url" : "http://www.drupal.org",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "drupal\\.js"
            },
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "sites/(default|all)/(themes|modules)/"
            }
        ]
    },
    {
        "icon": "ipb.jpg",
        "title": "Invision Power Board",
        "url" : "http://www.invisionpower.com",
        "rules": [
            {
                "type": 1,
                "name": "SCRIPT",
                "attributes": "src",
                "match": "jscripts/ips_"
            },
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "ipb_.+\\.css"
            }
        ]
    },
    {
        "icon": "limesurvey.jpg",
        "title": "LimeSurvey",
        "url" : "http://www.limesurvey.org",
        "rules": [
            {
                "type": 1,
                "name": "LINK",
                "attributes": "href",
                "match": "lime-progress.css"
            }
        ]
    },
    {
        "icon": "mediawiki.jpg",
        "title": "MediaWiki",
        "url" : "http://www.mediawiki.org",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "MediaWiki"
            }
        ]
    },
    {
        "icon": "minibb.jpg",
        "title": "MiniBB",
        "url" : "http://www.minibb.com",
        "rules": [
            {
                "type": 8,
                "name": "",
                "attributes": "",
                "match": "miniBB Copyright link"
            }
        ]
    },
    {
        "icon": "movabletype.jpg",
        "title": "Movable Type",
        "url" : "http://www.movabletype.org",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "Movable Type"
            }
        ]
    },
    {
        "icon": "phpbb.jpg",
        "title": "phpBB",
        "url" : "http://www.phpbb.com",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "phpBB Group"
            }
        ]
    },
    {
        "icon": "phpnuke.jpg",
        "title": "PHP-Nuke",
        "url" : "http://www.phpnuke.org",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "PHP-Nuke"
            }
        ]
    },
    {
        "icon": "phpsqlitecms.ico",
        "title": "phpSQLiteCMS",
        "url" : "http://phpsqlitecms.net",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "^phpSQLiteCMS"
            }
        ]
    },
    {
        "icon": "pwiki.jpg",
        "title": "Pwiki",
        "url" : "http://pwiki.sourceforge.net",
        "rules": [
            {
                "type": 3,
                "name": "SCRIPT",
                "attributes": "",
                "match": "var piwikTracker = Piwik\\.getTracker\\("
            }
        ]
    },
    {
        "icon": "pligg.jpg",
        "title": "Pligg",
        "url" : "http://pwiki.sourceforge.net",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "Pligg"
            }
        ]
    },
    {
        "icon": "redmine.ico",
        "title": "Redmine",
        "url" : "http://www.redmine.org",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "Redmine"
            }
        ]
    },
    {
        "icon": "vbulletin.ico",
        "title": "vBulletin",
        "url" : "http://www.vbulletin.com",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "vBulletin"
            }
        ]
    },
    {
        "icon": "nexusphp.png",
        "title": "NexusPHP",
        "url" : "http://www.vbulletin.com",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "NexusPHP"
            },
            {
                "type": 1,
                "name": "A",
                "attributes": "href",
                "match": "aboutnexus.php"
            }
        ]
    },
    {
        "icon": "empirecms.ico",
        "title": "EmpireCMS",
        "url" : "http://www.phome.net/",
        "rules": [
            {
                "type": 1,
                "name": "META",
                "attributes": "content",
                "match": "EmpireCMS"
            },
            {
                "type": 3,
                "name": "TITLE",
                "attributes": "",
                "match": "Powered by EmpireCMS"
            }
        ]
    }
];
!function(e){function t(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),n=function(){function e(){r(this,e)}return i(e,[{key:"getAll",value:function(){return this.data}}]),e}();e.exports=n},function(e,t,o){"use strict";e.exports=o(2)},function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(3),s=o(4),c=o(5),l=function(){function e(t,o,n){r(this,e),this._init(),this.request="object"===(void 0===t?"undefined":i(t))?t:{},this.compiledRegexList=this.compileRegex(this.crawlers.getAll()),this.compiledExclusions=this.compileRegex(this.exclusions.getAll()),this.setHttpHeaders(o),this.userAgent=this.setUserAgent(n)}return n(e,[{key:"_init",value:function(){this.crawlers=new a,this.headers=new c,this.exclusions=new s}},{key:"compileRegex",value:function(e){return new RegExp(e.join("|").trim(),"g")}},{key:"setHttpHeaders",value:function(e){"object"===(void 0===e?"undefined":i(e))&&0!=Object.keys(e).length||(e=Object.keys(this.request).length?this.request.headers:{}),this.httpHeaders=[];for(var t in e)"http-"===t.substring(0,5)&&(this.httpHeaders[t]=e[t])}},{key:"setUserAgent",value:function(e){if(void 0===e||null==e||!e.length){var t=!0,o=!1,r=void 0;try{for(var i,n=this.getUaHttpHeaders()[Symbol.iterator]();!(t=(i=n.next()).done);t=!0){var a=i.value;0===Object.keys(this.httpHeaders).indexOf(a.toLowerCase())&&(e+=this.httpHeaders[a]+" ")}}catch(e){o=!0,r=e}finally{try{!t&&n.return&&n.return()}finally{if(o)throw r}}}return e}},{key:"getUaHttpHeaders",value:function(){return this.headers.getAll()}},{key:"isCrawler",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=void 0===e||null==e?this.userAgent:e;if(t=t.replace(this.compiledExclusions,""),0==t.trim().length)return!1;var o=this.compiledRegexList.exec(t.trim());return o&&(this.matches=o),null!==o&&!!o.length}},{key:"getMatches",value:function(){return void 0!==this.matches?this.matches.length?this.matches[0]:null:{}}}]),e}();e.exports=l},function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.data=[".*Java.*outbrain"," YLT","^b0t$","^bluefish ","^Calypso v\\/","^COMODO DCV","^DangDang","^DavClnt","^FDM ","^git\\/","^Goose\\/","^Grabber","^HTTPClient\\/","^Java\\/","^Jeode\\/","^Jetty\\/","^Mail\\/","^Mget","^Microsoft URL Control","^NG\\/[0-9\\.]","^NING\\/","^PHP\\/[0-9]","^RMA\\/","^Ruby|Ruby\\/[0-9]","^VSE\\/[0-9]","^WordPress\\.com","^XRL\\/[0-9]","^ZmEu","008\\/","13TABS","192\\.comAgent","2ip\\.ru","404checker","404enemy","7Siters","80legs","a\\.pr-cy\\.ru","a3logics\\.in","A6-Indexer","Abonti","Aboundex","aboutthedomain","Accoona-AI-Agent","acoon","acrylicapps\\.com\\/pulp","Acunetix","AdAuth\\/","adbeat","AddThis","ADmantX","adressendeutschland","adscanner\\/","Advanced Email Extractor v","agentslug","AHC","aihit","aiohttp\\/","Airmail","Akamai_Site_Analyzer","akka-http\\/","akula\\/","alertra","alexa site audit","Alibaba\\.Security\\.Heimdall","Alligator","allloadin\\.com","AllSubmitter","alyze\\.info","amagit","Anarchie","AndroidDownloadManager","Anemone","AngleSharp\\/","annotate_google","Ant\\.com","Anturis Agent","AnyEvent-HTTP\\/","Apache Droid","Apache OpenOffice","Apache-HttpAsyncClient\\/","Apache-HttpClient\\/","ApacheBench\\/","Apexoo","APIs-Google","AportWorm\\/[0-9]","AppBeat\\/[0-9]","AppEngine-Google","AppStoreScraperZ","Aprc\\/[0-9]","Arachmo","arachnode","Arachnophilia","aria2","Arukereso","asafaweb.com","AskQuickly","ASPSeek","Asterias","Astute","asynchttp","Attach","autocite","Autonomy","axios\\/","B-l-i-t-z-B-O-T","Backlink-Ceck","backlink-check","BackStreet","BackWeb","Bad-Neighborhood","Badass","baidu\\.com","Bandit","basicstate","BatchFTP","Battleztar\\ Bazinga","baypup\\/[0-9]","baypup\\/colbert","BazQux","BBBike","BCKLINKS","BDFetch","BegunAdvertising\\/","Bidtellect\\/","BigBozz","Bigfoot","biglotron","BingLocalSearch","BingPreview","binlar","biNu image cacher","Bitacle","biz_Directory","Black\\ Hole","Blackboard Safeassign","BlackWidow","BlockNote\\.Net","Bloglines\\/","Bloglovin","BlogPulseLive","BlogSearch","Blogtrottr","BlowFish","Boardreader","boitho\\.com-dc","BPImageWalker","Braintree-Webhooks","Branch Metrics API","Branch-Passthrough","Brandprotect","BrandVerity\\/[0-9]","Brandwatch","Brodie\\/","Browsershots","BUbiNG","Buck\\/","Buddy","BuiltWith","Bullseye","BunnySlippers","Burf Search","Butterfly\\/","BuzzSumo","CAAM\\/[0-9]","CakePHP","Calculon","CapsuleChecker","CaretNail","catexplorador","CC Metadata Scaper","Cegbfeieh","censys","Cerberian Drtrs","CERT\\.at-Statistics-Survey","cg-eye","changedetection","ChangesMeter\\/","Charlotte","CheckHost","checkprivacy","CherryPicker","ChinaClaw","Chirp\\/[0-9]","chkme\\.com","Chlooe","Chromaxa","CirrusExplorer\\/","CISPA Vulnerability Notification","Citoid","CJNetworkQuality","Clarsentia","clips\\.ua\\.ac\\.be","Cloud\\ mapping","CloudEndure","CloudFlare-AlwaysOnline","Cloudinary\\/[0-9]","cmcm\\.com","coccoc","cognitiveseo","colly -","CommaFeed","Commons-HttpClient","Comodo SSL Checker","contactbigdatafr","contentkingapp","convera","CookieReports\\.com","copyright sheriff","CopyRightCheck","Copyscape","Cosmos4j\\.feedback","Covario-IDS","Crescent","Crowsnest","Criteo","CSHttp","curb","Curious George","curl","cuwhois\\/[0-9]","cybo\\.com","DareBoost","DatabaseDriverMysqli","DataCha0s","Datanyze","DataparkSearch","dataprovider","DataXu","Daum(oa)?[ \\/][0-9]","DemandbasePublisherAnalyzer\\/","Demon","DeuSu","developers\\.google\\.com\\/\\+\\/web\\/snippet\\/","Devil","Digg","Digincore","DigitalPebble","Dirbuster","Dispatch\\/","DittoSpyder","dlvr","DMBrowser","DNS-Tools Header-Analyzer","DNSPod-reporting","docoloc","Dolphin http client\\/","DomainAppender","Donuts Content Explorer","dotMailer content retrieval","dotSemantic","downforeveryoneorjustme","Download\\ Wonder","downnotifier\\.com","DowntimeDetector","Dragonfly File Reader","Drip","drupact","Drupal \\(\\+http:\\/\\/drupal\\.org\\/\\)","DTS\\ Agent","dubaiindex","EARTHCOM","Easy-Thumb","EasyDL","Ebingbong","ec2linkfinder","eCairn-Grabber","eCatch","ECCP","eContext\\/","Ecxi","EirGrabber","ElectricMonk","elefent","EMail Exractor","EMail\\ Wolf","Email%20Extractor%20Lite","EmailWolf","Embed PHP Library","Embedly","endo\\/","europarchive\\.org","evc-batch","EventMachine HttpClient","Everwall Link Expander","Evidon","Evrinid","ExactSearch","ExaleadCloudview","Excel\\/","exif","Exploratodo","Express WebPictures","ExtractorPro","Extreme\\ Picture\\ Finder","EyeNetIE","ezooms","facebookexternalhit","facebookplatform","fairshare","Faraday v","fasthttp","Faveeo","Favicon downloader","faviconkit","FavOrg","Feed Wrangler","Feedable\\/","Feedbin","FeedBooster","FeedBucket","FeedBunch\\/[0-9]","FeedBurner","FeedChecker","Feedly","Feedreader","FeedshowOnline","Feedspot","Feedwind\\/[0-9]","FeedZcollector","feeltiptop","Fetch API","Fetch\\/[0-9]","Fever\\/[0-9]","FHscan","Fimap","findlink","findthatfile","FlashGet","FlipboardBrowserProxy","FlipboardProxy","FlipboardRSS","Flock\\/","fluffy","Flunky","flynxapp","forensiq","FoundSeoTool\\/[0-9]","free thumbnails","Freeuploader","FreeWebMonitoring SiteChecker","Funnelback","G-i-g-a-b-o-t","g00g1e\\.net","GAChecker","ganarvisitas\\/[0-9]","geek-tools","Genderanalyzer","Genieo","GentleSource","Getintent","GetLinkInfo","getprismatic\\.com","GetRight","getroot","GetURLInfo\\/[0-9]","GetWeb","Ghost Inspector","GigablastOpenSource","GIS-LABS","github-camo","github\\.com\\/","Go [\\d\\.]* package http","Go http package","Go-Ahead-Got-It","Go-http-client","Go!Zilla","gobyus","gofetch","GomezAgent","gooblog","Goodzer\\/[0-9]","Google AppsViewer","Google favicon","Google Keyword Suggestion","Google Keyword Tool","Google Page Speed Insights","Google PP Default","Google Search Console","Google Web Preview","google_partner_monitoring","Google-Adwords","Google-Apps-Script","Google-Calendar-Importer","Google-HotelAdsVerifier","Google-HTTP-Java-Client","Google-Publisher-Plugin","Google-SearchByImage","Google-Site-Verification","Google-Structured-Data-Testing-Tool","Google-Youtube-Links","GoogleCloudMonitoring","GoogleDocs","GoogleHC\\/","GoogleProducer","GoogleSites","Gookey","GoScraper","GoSpotCheck","GoSquared-Status-Checker","gosquared-thumbnailer","Gotit","GoZilla","grabify","GrabNet","Grafula","Grammarly","GrapeFX","grokkit","grouphigh","grub-client","gSOAP\\/","GT::WWW","GTmetrix","GuzzleHttp","gvfs\\/","HAA(A)?RTLAND http client","Haansoft","hackney\\/","Hatena","Havij","hawkReader","HeadlessChrome","HEADMasterSEO","HeartRails_Capture","help@dataminr\\.com","heritrix","historious\\/","hkedcity","hledejLevne\\.cz\\/[0-9]","Hloader","HMView","Holmes","HonesoSearchEngine\\/","HootSuite Image proxy","Hootsuite-WebFeed\\/[0-9]","hosterstats","HostTracker","ht:\\/\\/check","htdig","HTMLparser","htmlyse\\.com","HTTP_Compression_Test","http_request2","http_requester","http-get","HTTP-Header-Abfrage","http-kit","http-request\\/","HTTP-Tiny","HTTP::Lite","http\\.rb\\/","HttpComponents","httphr","HTTPMon","httpscheck","httpssites_power","httpunit","HttpUrlConnection","httrack","huaweisymantec","HubSpot ","Humanlinks","HyperZbozi.cz Feeder","i2kconnect\\/","Iblog","ichiro","Id-search","IdeelaborPlagiaat","IDG Twitter Links Resolver","IDwhois\\/[0-9]","Iframely","igdeSpyder","IlTrovatore","Image\\ Fetch","Image\\ Sucker","ImageEngine\\/","ImageVisu\\/","Imagga","imagineeasy","imgsizer","InAGist","inbound\\.li parser","InDesign%20CC","Indy\\ Library","InetURL","infegy","infohelfer","InfoTekies","InfoWizards Reciprocal Link System PRO","inpwrd\\.com","instabid","Instapaper","Integrity","integromedb","Intelliseek","InterGET","internet_archive","Internet\\ Ninja","InternetSeer","internetVista monitor","intraVnews","IODC","IOI","iplabel","ips-agent","IPS\\/[0-9]","IPWorks HTTP\\/S Component","iqdb\\/","Iria","Irokez","isitup\\.org","iskanie","isUp\\.li","iThemes Sync\\/[0-9]","iZSearch","JAHHO","janforman","Jaunt\\/","Jbrofuzz","Jersey\\/","JetCar","Jigsaw","Jobboerse","JobFeed discovery","Jobg8 URL Monitor","jobo","Jobrapido","Jobsearch1\\.5","JoinVision Generic","JolokiaPwn","Joomla","Jorgee","JS-Kit","JustView","Kaspersky Lab CFR link resolver","KeepRight OpenStreetMap Checker","Kelny\\/","Kerrigan\\/","KeyCDN","Keyword Extractor","Keyword\\ Density","Keywords Research","KickFire","KimonoLabs\\/","Kml-Google","knows\\.is","KOCMOHABT","kouio","kube-probe","kulturarw3","KumKie","L\\.webis","Larbin","Lavf\\/","LayeredExtractor","LeechFTP","LeechGet","letsencrypt","Lftp","LibVLC","LibWeb","Libwhisker","libwww","Licorne","Liferea\\/","Lightspeedsystems","Likse","link checker","Link Valet","link_thumbnailer","LinkAlarm\\/","linkCheck","linkdex","LinkExaminer","linkfluence","linkpeek","LinkPreviewGenerator","LinkScan","LinksManager","LinkTiger","LinkWalker","Lipperhey","Litemage_walker","livedoor ScreenShot","LoadImpactRload","localsearch-web","LongURL API","looksystems\\.net","ltx71","lua-resty-http","lwp-request","lwp-trivial","LWP::Simple","lycos","LYT\\.SR","mabontland","Mag-Net","MagpieRSS","Mail.Ru","MailChimp","Majestic12","makecontact\\/","Mandrill","MapperCmd","marketinggrader","MarkMonitor","MarkWatch","Mass\\ Downloader","masscan\\/[0-9]","Mata\\ Hari","Mediapartners-Google","mediawords","MegaIndex\\.ru","Melvil Rawi\\/","MergeFlow-PageReader","Metaspinner","MetaURI","MFC_Tear_Sample","Microsearch","Microsoft Office ","Microsoft Outlook","Microsoft Windows Network Diagnostics","Microsoft-WebDAV-MiniRedir","Microsoft\\ Data\\ Access","MIDown\\ tool","MIIxpc","Mindjet","Miniature.io\\/","Miniflux","Mister\\ PiX","mixdata dot com","mixed-content-scan","Mixmax-LinkPreview","mixnode","Mnogosearch","mogimogi","Mojeek","Mojolicious \\(Perl\\)","Monit\\/","monitis","Monitority\\/[0-9]","montastic","MonTools","Moreover","Morfeus\\ Fucking\\ Scanner","Morning Paper","MovableType","mowser","Mrcgiguy","MS\\ Web\\ Services\\ Client\\ Protocol","MSFrontPage","mShots","MuckRack\\/","muhstik-scan","MVAClient","MxToolbox\\/","nagios","Najdi\\.si\\/","Name\\ Intelligence","Nameprotect","Navroad","NearSite","Needle","Nessus","Net\\ Vampire","NetAnts","NETCRAFT","NetLyzer","NetMechanic","NetNewsWire","Netpursual","netresearch","NetShelter ContentScan","Netsparker","NetTrack","Netvibes","NetZIP","Neustar WPM","NeutrinoAPI","NewRelicPinger","NewsBlur .*Finder","NewsGator","newsme","newspaper\\/","Nexgate Ruby Client","NG-Search","Nibbler","NICErsPRO","Nikto","nineconnections\\.com","NLNZ_IAHarvester","Nmap Scripting Engine","node-superagent","node-urllib\\/","node\\.io","Nodemeter","NodePing","nominet\\.org\\.uk","Norton-Safeweb","Notifixious","notifyninja","nuhk","nutch","Nuzzel","nWormFeedFinder","Nymesis","NYU","Ocelli\\/[0-9]","Octopus","oegp","Offline Explorer","Offline\\ Navigator","og-scraper\\/","okhttp","Omea Reader","omgili","OMSC","Online Domain Tools","OpenCalaisSemanticProxy","Openfind","OpenLinkProfiler","Openstat\\/","OpenVAS","Optimizer","Orbiter","OrgProbe\\/[0-9]","orion-semantics","Outlook-Express","ow\\.ly","Owler","ownCloud News","OxfordCloudService\\/[0-9]","Page Analyzer","Page Valet","page_verifier","page\\ scorer","page2rss","PageAnalyzer","PageGrabber","PagePeeker","PageScorer","Pagespeed\\/[0-9]","Panopta","panscient","Papa\\ Foto","parsijoo","Pavuk","PayPal IPN","pcBrowser","Pcore-HTTP","PEAR HTTPRequest","Pearltrees","PECL::HTTP","peerindex","Peew","PeoplePal","Perlu -","PhantomJS Screenshoter","PhantomJS\\/","Photon\\/","phpservermon","Pi-Monster","Picscout","Picsearch","PictureFinder","Pimonster","ping\\.blo\\.gs\\/","Pingability","PingAdmin\\.Ru","Pingdom","Pingoscope","PingSpot","pinterest\\.com","Pixray","Pizilla","Plagger\\/","Ploetz \\+ Zeller","Plukkie","plumanalytics","PocketImageCache","PocketParser","Pockey","POE-Component-Client-HTTP","Pompos","Porkbun","Port Monitor","postano","PostmanRuntime\\/","PostPost","postrank","PowerPoint\\/","Priceonomics Analysis Engine","PrintFriendly\\.com","PritTorrent\\/[0-9]","Prlog","probethenet","Project 25499","Promotion_Tools_www.searchenginepromotionhelp.com","prospectb2b","Protopage","ProWebWalker","proximic","PRTG Network Monitor","pshtt, https scanning","PTST ","PTST\\/[0-9]+","Pulsepoint XT3 web scraper","Pump","Python-httplib2","python-requests","Python-urllib","Qirina Hurdler","QQDownload","QrafterPro","Qseero","Qualidator.com SiteAnalyzer","QueryN\\ Metasearch","queuedriver","Quora Link Preview","Qwantify","Radian6","RankActive","RankFlex","RankSonicSiteAuditor","raynette_httprequest","Re-re Studio","Readability","RealDownload","RealPlayer%20Downloader","RebelMouse","Recorder","RecurPost\\/","redback\\/","Redirect Checker Tool","ReederForMac","ReGet","RepoMonkey","request\\.js","ResponseCodeTest\\/[0-9]","RestSharp","Riddler","Rival IQ","Robosourcer","Robozilla\\/[0-9]","ROI Hunter","RPT-HTTPClient","rss reader","RSSOwl","RssReader\\/","safe-agent-scanner","SalesIntelligent","Saleslift","SauceNAO","SBIder","scalaj-http","scan\\.lol","ScanAlert","Scoop","scooter","ScoutJet","ScoutURLMonitor","ScrapeBox Page Scanner","Scrapy","Screaming","ScreenShotService\\/[0-9]","Scrubby","Scrutiny\\/","search\\.thunderstone","Search37\\/","Searchestate","SearchExpress","SearchSight","Seeker","semanticdiscovery","semanticjuice","Semiocast HTTP client","Semrush","sentry\\/","SEO Browser","Seo Servis","seo-nastroj.cz","seo4ajax","Seobility","SEOCentro","SeoCheck","SEOkicks","Seomoz","SEOprofiler","SeopultContentAnalyzer","seoscanners","SEOstats","Server Density Service Monitoring","servernfo\\.com","sexsearcher","Seznam","Shelob","Shodan","Shoppimon Analyzer","ShoppimonAgent\\/[0-9]","ShopWiki","ShortLinkTranslate","shrinktheweb","Sideqik","SilverReader","SimplePie","SimplyFast","Siphon","SISTRIX","Site-Shot\\/","Site\\ Sucker","Site24x7","SiteBar","Sitebeam","Sitebulb\\/","SiteCondor","SiteExplorer","SiteGuardian","Siteimprove","SiteIndexed","Sitemap(s)? Generator","SitemapGenerator","SiteMonitor","Siteshooter B0t","SiteSnagger","SiteSucker","SiteTruth","Sitevigil","sitexy\\.com","SkypeUriPreview","Slack\\/","slider\\.com","slurp","SlySearch","SmartDownload","SMRF URL Expander","SMUrlExpander","Snake","Snappy","SnapSearch","Snarfer\\/","SniffRSS","sniptracker","Snoopy","SnowHaze Search","sogou web","SortSite","Sottopop","sovereign\\.ai","SpaceBison","SpamExperts","Spammen","Spanner","spaziodati","SPDYCheck","Specificfeeds","speedy","SPEng","Spinn3r","spray-can","Sprinklr ","spyonweb","sqlmap","Sqlworm","Sqworm","SSL Labs","ssl-tools","StackRambler","Statastico\\/","StatusCake","Steeler","Stratagems Kumo","Stroke.cz","StudioFACA","StumbleUpon","suchen","Sucuri","summify","Super Monitoring","SuperHTTP","Surphace Scout","Suzuran","SwiteScraper","Symfony BrowserKit","Symfony2 BrowserKit","SynHttpClient-Built","Sysomos","sysscan","Szukacz","T0PHackTeam","tAkeOut","Tarantula\\/","Taringa UGC","TarmotGezgin","Teleport","Telesoft","Telesphoreo","Telesphorep","Tenon\\.io","teoma","terrainformatica\\.com","Test Certificate Info","Tetrahedron\\/[0-9]","The Drop Reaper","The Expert HTML Source Viewer","The Knowledge AI","The\\ Intraformant","theinternetrules","TheNomad","theoldreader\\.com","Thinklab","Thumbshots","ThumbSniper","TinEye","Tiny Tiny RSS","TLSProbe\\/","Toata","topster","touche.com","Traackr.com","tracemyfile","TrapitAgent","Trendiction","Trendsmap Resolver","trendspottr\\.com","truwoGPS","TulipChain","Turingos","Turnitin","tweetedtimes\\.com","Tweetminster","Tweezler\\/","twibble","Twice","Twikle","Twingly","Twisted PageGetter","Typhoeus","ubermetrics-technologies","uclassify","UdmSearch","unirest-java","UniversalFeedParser","Unshorten\\.It","Untiny","UnwindFetchor","updated","updown\\.io daemon","Upflow","Uptimia","URL Verifier","URLChecker","URLitor.com","urlresolver","Urlstat","UrlTrends Ranking Updater","URLy\\ Warning","URLy\\.Warning","Vacuum","Vagabondo","VB\\ Project","vBSEO","VCI","via ggpht\\.com GoogleImageProxy","VidibleScraper","Virusdie","visionutils","vkShare","VoidEYE","Voil","voltron","voyager\\/","VSAgent\\/[0-9]","VSB-TUO\\/[0-9]","Vulnbusters Meter","VYU2","w3af\\.org","W3C_I18n-Checker","W3C_Unicorn","W3C-checklink","W3C-mobileOK","WAC-OFU","Wallpapers\\/[0-9]+","WallpapersHD","wangling","Wappalyzer","WatchMouse","WbSrch\\/","WDT\\.io","web-capture\\.net","Web-Monitoring","Web-sniffer","Web\\ Auto","Web\\ Collage","Web\\ Enhancer","Web\\ Fetch","Web\\ Fuck","Web\\ Pix","Web\\ Sauger","Web\\ Sucker","Webalta","Webauskunft","WebAuto","WebCapture","WebClient\\/","webcollage","WebCookies","WebCopier","WebCorp","WebDataStats\\/[0-9]","WebDoc","WebEnhancer","WebFetch","WebFuck","WebGo\\ IS","WebImageCollector","WebImages","WebIndex","webkit2png","WebLeacher","webmastercoffee","webmon ","WebPix","WebReaper","WebSauger","webscreenie","Webshag","Webshot","Website Analyzer\\/","Website\\ Quester","WebsiteExtractor","websitepulse agent","websitepulse[+ ]checker","WebsiteQuester","Websnapr\\/","Webster","WebStripper","WebSucker","Webthumb\\/[0-9]","WebThumbnail","WebWhacker","WebZIP","WeLikeLinks","WEPA","WeSEE","wf84","Wfuzz\\/","wget","WhatsApp","WhatsMyIP","WhatWeb","WhereGoes\\?","Whibse","WhoRunsCoinHive","Whynder Magnet","Windows-RSS-Platform","WinHttpRequest","WinPodder","wkhtmlto","wmtips","Woko","Word\\/","WordPress\\/","WordupinfoSearch","wotbox","WP Engine Install Performance API","wpif","wprecon\\.com survey","WPScan","wscheck","Wtrace","WWW-Collector-E","WWW-Mechanize","WWW::Document","WWW::Mechanize","www\\.monitor\\.us","WWWOFFLE","x09Mozilla","x22Mozilla","XaxisSemanticsClassifier","Xenu Link Sleuth","XING-contenttabreceiver\\/[0-9]","xpymep([0-9]?)\\.exe","Y!J-(ASR|BSC)","Y\\!J-BRW","Yaanb","yacy","Yahoo Ad monitoring","Yahoo Link Preview","YahooCacheSystem","YahooYSMcm","YandeG","Yandex(?!Search)","yanga","yeti","Yo-yo","Yoleo Consumer","yoogliFetchAgent","YottaaMonitor","Your-Website-Sucks\\/[0-9]","yourls\\.org","YoYs\\.net","YP\\.PL","Zade","Zao","Zauba","Zemanta Aggregator","Zend_Http_Client","Zend\\\\Http\\\\Client","Zermelo","Zeus","zgrab","ZnajdzFoto","Zombie\\.js","ZyBorg","[a-z0-9\\-_]*(bot|crawl|archiver|transcoder|spider|uptime|validator|fetcher|cron)"],e}return n(t,e),t}(a);e.exports=s},function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.data=["Safari.[\\d\\.]*","Firefox.[\\d\\.]*"," Chrome.[\\d\\.]*","Chromium.[\\d\\.]*","MSIE.[\\d\\.]","Opera\\/[\\d\\.]*","Mozilla.[\\d\\.]*","AppleWebKit.[\\d\\.]*","Trident.[\\d\\.]*","Windows NT.[\\d\\.]*","Android [\\d\\.]*","Macintosh.","Ubuntu","Linux","[ ]Intel","Mac OS X [\\d_]*","(like )?Gecko(.[\\d\\.]*)?","KHTML,","CriOS.[\\d\\.]*","CPU iPhone OS ([0-9_])* like Mac OS X","CPU OS ([0-9_])* like Mac OS X","iPod","compatible","x86_..","i686","x64","X11","rv:[\\d\\.]*","Version.[\\d\\.]*","WOW64","Win64","Dalvik.[\\d\\.]*"," \\.NET CLR [\\d\\.]*","Presto.[\\d\\.]*","Media Center PC","BlackBerry","Build","Opera Mini\\/\\d{1,2}\\.\\d{1,2}\\.[\\d\\.]*\\/\\d{1,2}\\.","Opera"," \\.NET[\\d\\.]*","cubot","; M bot","; B bot","; IDbot","; ID bot","; POWER BOT",";"],e}return n(t,e),t}(a);e.exports=s},function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(0),s=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.data=["HTTP_USER_AGENT","HTTP_X_OPERAMINI_PHONE_UA","HTTP_X_DEVICE_USER_AGENT","HTTP_X_ORIGINAL_USER_AGENT","HTTP_X_SKYFIRE_PHONE","HTTP_X_BOLT_PHONE_UA","HTTP_DEVICE_STOCK_UA","HTTP_X_UCBROWSER_DEVICE_UA","HTTP_FROM","HTTP_X_SCANNER"],e}return n(t,e),t}(a);e.exports=s}]);
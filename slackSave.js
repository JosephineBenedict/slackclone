var express = require('express');
//var sql = require('./loadDB');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/index.html', function (req, res) {
    res.send('Doing index.html code');
});

app.get('/loadDB', function (req, res) {
    res.send('Creating and Loading database ...........');
	var db = createLoadDataBase();
	console.log("  Creating and Loading database complete!");
});



app.get('/getFollowersJSON', function (req, res) {
    //res.send('Creating and Loading database ...........');
	var db = getFollowersJSON();
	console.log("  getFollowersJSON complete!");
});







app.get('/twitterLogIn', function (req, res) {
    res.send('Doing twitter login code');
});

app.get('/getLatestFeeds', function (req, res) {
    res.send('Doing getLatestFeeds code');
});

app.get('/getFollowerTweets', function (req, res) {
    res.send('Doing getFollowerTweets code');
});

app.get('/getUserOwnTweets', function (req, res) {
    res.send('Doing getUserOwnTweets code');
});


app.get('/index.html', function (req, res) {
    res.send('Doing index.html code');
});

app.listen(3000, function () {
    console.log('Twitter Clone listening on port 3000!');
});



function createLoadDataBase() {
	console.log("  Entering createLoadDataBase");
var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var filename = 'slack.db';
var dbexists = false;
try {
    fs.accessSync(filename);
    dbexists = true;
} catch (ex) {
    dbexists = false;
}
var db = new sqlite3.Database('slack.db');
if (!dbexists) {
    db.serialize(function() {
        var createTeamTableSql = "CREATE TABLE IF NOT EXISTS TEAM " +
                       "(TEAMID     CHAR(25)    PRIMARY KEY     NOT NULL," +
                       " TEAM_NAME   CHAR(50)                    NOT NULL)"; 

        var createUserTableSql = "CREATE TABLE IF NOT EXISTS USER " +
                    "(USERID        CHAR(25)        PRIMARY KEY     NOT NULL," +
                    " USER_NAME     CHAR(50)                        NOT NULL"  + 
                    " PASSWORD      CHAR(25)                        NOT NULL"  + 
                    " EMAIL         CHAR(50)                        NOT NULL)"; 
 
      var createTeamUserTableSql = "CREATE TABLE IF NOT EXISTS USER " +
                    "(TEAM_USER_ID  CHAR(25)        PRIMARY KEY     NOT NULL," +
                    " USERID        CHAR(50)                        NOT NULL"  + 
                    " TEAMID        CHAR(50)                        NOT NULL)"; 

        var createChannelTableSql = "CREATE TABLE IF NOT EXISTS CHANNEL " +
                       "(CHANNELID        CHAR(25)    PRIMARY KEY     NOT NULL," +
                       " CHANNEL_NAME     CHAR(50)                    NOT NULL"  + 
					   " TEAMID     	  CHAR(25)       		       NOT NULL)";    
				       " DESCRIPTION      CHAR(25)       		       NOT NULL)";    
 					
		var createMessageTypeTableSql = "CREATE TABLE IF NOT EXISTS MESSAGE_TYPE " +
                    "(TYPE      CHAR(1)        PRIMARY KEY     NOT NULL," +
				    " DESCRIPTION  	CHAR(25)    	               NOT NULL)"; 	
 		
	    var createMessageTableSql = "CREATE TABLE IF NOT EXISTS MESSAGE " +
                    "(MESSAGEID        CHAR(25)        PRIMARY KEY     NOT NULL," +
					" TIME             CHAR(10)        PRIMARY KEY     NOT NULL," +
				    " TYPE      CHAR(1)         PRIMARY KEY     NOT NULL"  + 	
   					" CHANNELID      CHAR(25)        PRIMARY KEY     NOT NULL"  + 	
							
						
        db.run(createTeamTableSql);
        db.run(createChannelTableSql);
        db.run(createUserTableSql);
		db.run(createUserChannelTableSql);
        db.run(createMessageTypeTableSql);
		db.run(createMessageTableSql);
		
		
       var insertTeamSql = "INSERT INTO TEAM (TEAM_ID, TEAM_NAME) " +
            "VALUES ('Boston',        'Red Sox'),     " +
                   "('New York',      'Giants'),      " +
                   "('Baltimore',     'Colts'),       " +
                   "('San Francisco', 'Forty-Niners')," +
                   "('New Delhi',     'Crickets');"; 
		
		
		
        var insertChannelSql = "INSERT INTO CHANNEL (CHANNEL_ID, NAME, TEAM_ID) " +
            "VALUES ('ABC',   'American Broadcasting', 'Boston')," +
                   "('NBC',   'National Broadcasting', 'Boston')," +
                   "('CBS',   'Central Broadcasting',  'New Delhi')," +
                   "('CNN',   'Cable News Tetwork',    'Baltimore')," +
                   "('FOX',   'Foxy Lady',             'New York');"; 
        
        var insertUserSql = "INSERT INTO USER (USERID, USER_NAME) " +
           "VALUES ('Josie',   'Josephine Benedict')," +
                  "('Charles', 'Charles Walsek')," +
                  "('abu', 	   'abu ORSIS')," +
                  "('beiying', 'beiying OEEAS');";
				  
				  
	    var insertUserChannelSql = "INSERT INTO USER_CHANNEL (USERID, CHANNEL_ID) " +
           "VALUES ('Josie',   'ABC')," +
                  "('Charles', 'ABC')," +
                  "('abu', 	   'CBS')," +
                  "('beiying', 'CBS');";
			  
				  
				  
				  
				  
				  
                
        var insertTweetSql = "INSERT INTO TWEET (USERID, TWEET, DATE) " +
             "VALUES ('shuvo',      'Welcome to Tweeter Clone',                     '2016-08-05 12:45:00'), " +
                    "('abu',        'Tweet by Abu',                                 '2016-08-05 12:46:00'), " +
                    "('abu',        'Lets do Node.js',                              '2016-08-08 12:46:00'), " +
                    "('abu',        'Lunch Time!',                                  '2016-08-08 12:30:00'), " +
                    "('abu',        'We are in 2-nd week of boot camp training!',   '2016-08-08 08:30:00'), " +
                    "('shuvo',      'SQLite is easy configuration!',                '2016-08-05 09:30:00'), " +
                    "('shuvo',      'Rio Olympic!',                                 '2016-08-05 09:30:00'), " +
                    "('shuvo',      'Welcome to 2nd week of boot camp...',          '2016-08-08 08:30:00'), " +
                    "('charles',    'SQLite is cool!',                              '2016-08-05 11:30:00'), " +
                    "('charles',    'Not bad for a Mainframe developer...',         '2016-08-08 09:30:00'), " +
                    "('charles',    'Having fun with HTML / CSS!',                  '2016-08-05 11:30:00'), " +
                    "('charles',    'Github!',                                      '2016-08-05 11:30:00'), " +
                    "('beiying',    'Twitter - Cloned!',                            '2016-08-08 13:30:00'), " +
                    "('swarup',     'Tweet, tweet!',                                '2016-08-05 11:30:00'), " +
                    "('shuvo',      'First week of boot camp complete!',            '2016-08-05 16:47:00');"; 
      
        db.run(insertFollowerSql);
        db.run(insertUserSql);
        db.run(insertTweetSql);
        db.each("SELECT * FROM TWEET", function(err, row) {
            console.log(row.USERID + ": " + row.TWEET);
        });
    });
}
 
 // function(err, jsonString) {}
function getFollowersJSON(userId, callBack) {
    var query = "SELECT USERID, FOLLOWERID FROM FOLLOWER "
         + "  WHERE USERID = '" + userId + "'";
    var followers = [];
    db.serialize(function() {
        db.each(
            query, 
            function(err, row) {
                followers.push(row.FOLLOWERID);
            },
            function (err) {
                callBack(err, JSON.stringify(followers));
            }
        );
    });
}
getFollowersJSON('abu', function (err, jsonString) {
    if (err) {
    }
    console.log(jsonString);
});
db.close();	
};



var express = require('express');
//var sql = require('./loadDB');
var app = express();

module.exports = {

	getConnection : function (filename) {
		console.log("  Entering getConnection");
		var express = require('express');
		var sqlite3 = require('sqlite3').verbose();
		var fs = require('fs');
		//var filename = 'slack.db';
		var dbexists = false;
		try {
			console.log("  before accessSync");
			fs.accessSync(filename);
			console.log("  accessSync true");
			dbexists = true;
		
		} catch (ex) {
			dbexists = false;
			console.log("  accessSync false");
		}
		var db = new sqlite3.Database('slack.db');	
		
		console.log("  connection: " + db);
		
		return db;

	},
	
	getTeam : function(db, teamId) {
		console.log("Entering getTeam");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT NAME FROM TEAM "
             + "  WHERE ID = '" + teamId + "'";

        var teams = [];

        db.serialize(function() {
			console.log("Entering db.serialize");
            db.each(
                query,
                function(err, row) {
					console.log("  Entering func1");
                    if (err) {
                        reject(err);
                    } else {  
						console.log("  push func1");					
                        teams.push(row.NAME);
                    }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + teams);
						resolve(teams);
                    }
                }
            );
			});
		});
	}

};

function createLoadDataBase() {
	console.log("  Entering createLoadDataBase");
var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var filename = 'slack.db';
var dbexists = false;
try {
	console.log("  before accessSync");
    fs.accessSync(filename);
	console.log("  accessSync true");
    dbexists = true;
	
} catch (ex) {
    dbexists = false;
	console.log("  accessSync false");
}
var db = new sqlite3.Database('slack.db');
if (!dbexists) {
    db.serialize(function() {
		console.log("  Entering !dbexists funtion");
        var createTeamTableSql = "CREATE TABLE IF NOT EXISTS TEAM " +
                       "(ID     CHAR(25)    PRIMARY KEY     NOT NULL," +
                       " NAME   CHAR(50)                    NOT NULL)"; 

        var createUserTableSql = "CREATE TABLE IF NOT EXISTS USER " +
                    "(ID        CHAR(25)        PRIMARY KEY     NOT NULL,"  +
                    " NAME      CHAR(50)                        NOT NULL,"  + 
                    " PASSWORD  CHAR(25)                        NOT NULL,"  + 
                    " EMAIL     CHAR(50)                        NOT NULL)"; 
 
      var createTeamUserTableSql = "CREATE TABLE IF NOT EXISTS USER " +
                    "(ID            CHAR(25)        PRIMARY KEY     NOT NULL," +
                    " USERID        CHAR(25)                        NOT NULL," + 
                    " TEAMID        CHAR(25)                        NOT NULL)"; 

        var createChannelTableSql = "CREATE TABLE IF NOT EXISTS CHANNEL " +
                       "(ID           CHAR(25)    PRIMARY KEY     NOT NULL,"  +
                       " NAME         CHAR(50)                    NOT NULL,"  + 
					   " TEAMID       CHAR(25)       		      NOT NULL,"  +    
				       " DESCRIPTION  CHAR(50)       		      NOT NULL,"   +   
					   " TYPE         CHAR(1)       		      NOT NULL)";    					   
 					
	 		
	    var createMessageTableSql = "CREATE TABLE IF NOT EXISTS MESSAGE " +
                    "(ID          CHAR(25)        PRIMARY KEY     NOT NULL," +
				    " CONTENT     TEXT                            NOT NULL," +				
					" USERID      CHAR(25)                        NOT NULL," +
				    " CHANNELID   CHAR(25)                        NOT NULL"  + 	
   					" TIMESTAMP   CHAR(25)                        NOT NULL)"; 	
							
						
        db.run(createTeamTableSql);
		db.run(createUserTableSql);
        db.run(createTeamUserTableSql);
      
		db.run(createChannelTableSql);
     	db.run(createMessageTableSql);
		
		var insertTeamSql = "INSERT INTO TEAM (TEAM_ID, TEAM_NAME) " +
            "VALUES ('Boston',        'Red Sox'),     " +
                   "('New York',      'Giants'),      " +
                   "('Baltimore',     'Colts'),       " +
                   "('San Francisco', 'Forty-Niners')," +
                   "('New Delhi',     'Crickets');"; 
				   
		db.run(insertTeamSql);
		
         
        });
    };
	db.close();	
};
 

var conn = module.exports.getConnection('slack.db');
var actual = module.exports.getTeam(conn, 'Boston');    // <------- Edit t






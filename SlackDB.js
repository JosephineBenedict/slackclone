var express = require('express');
//var sql = require('./loadDB');
var app = express();


exports.foo=foo;
function foo(){
	
	
}



exports.getConnection=getConnection;
function getConnection(filename){
	console.log("  Entering getConnection");
		//var express = require('express');
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
		var db = new sqlite3.Database(filename);	
		
		console.log("  connection: " + db);
		
		return db;	
	
}



exports.getTeam=getTeam;
function getTeam(db, teamId) {
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
			
			
			console.log('Traversing return set3');
			for (var team in actual) {
				console.log('Processing a team!');
				team.keys(o).forEach(function(key) {
					var val = o[key];
					console.log("  Key: " + o[key]);
					console.log("  Val: " + val);
				});
				//console.log( myArr[index] );
			}	
		});	
	
}


exports.getAllTeams=getAllTeams;
function getAllTeams(db) {
		console.log("Entering getAllTeams");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT ID, NAME FROM TEAM ";
           
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
						var team = {};
						team.id  = row.ID;
						team.name = row.NAME;
                        teams.push(team);
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


exports.insertTeam=insertTeam;
function insertTeam(db, team) {
		console.log("Insert Team");
		
		return new Promise((resolve, reject) => {
			
		var a = team.ID;
		var b = team.NAME;
		
		console.log("a: " + a);
		console.log("b: " + b);
		
		var stmt = db.prepare('INSERT INTO TEAM (ID, NAME) values (?, ?)');
		console.log("prepared statement");
		stmt.run(a, b);
		console.log("statement ran");
		stmt.finalize();
		console.log("statement finalized");
		
		/*
		var insertTeamSql = "INSERT INTO TEAM (ID, NAME) " +
            "VALUES (a,        team.NAME)";
                  
		conn.run(insertTeamSql);
		*/
		
		console.log("Insert complete");		

		var query = "SELECT NAME FROM TEAM "
             //+ "  WHERE ID = '" + team.ID + "'";	
			 + "  WHERE ID = '" + a + "'";					 
           
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
						var returnTeam = {};
						//team.ID  = team.ID;
						returnTeam.ID  = a;
						returnTeam.NAME = row.NAME;
                        teams.push(returnTeam);
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



exports.getUser=getUser;
function getUser(db, userId) {
		console.log("Entering getUser");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT NAME, PASSWORD, EMAIL FROM USER "
             + "  WHERE ID = '" + userId + "'";

        var users = [];

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
						var user = {};
						user.id  = userId;
						user.name = row.NAME;
						user.password = row.PASSWORD;
						user.email = row.EMAIL;
                        users.push(email);						
                     }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + users);
						resolve(users);
                    }
                }
            );
			});
		});	
}


exports.getAllUsers=getAllUsers;
function getAllUsers(db) {
		console.log("Entering getAllUsers");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT ID, NAME, PASSWORD, EMAIL FROM USER ";
           
        var users = [];

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
						var user = {};
						user.id  = row.ID;
						user.name = row.NAME;
						user.password = row.PASSWORD;
						user.email = row.EMAIL;	
                        users.push(user);
                    }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + users);
						resolve(users);
                    }
                }
            );
			});
		});	
	
}


exports.getTeamUser=getTeamUser;
function getTeamUser(db, id) {
		console.log("Entering getTeamUser");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT USERID, TEAMID FROM TEAMUSER "
             + "  WHERE ID = '" + id + "'";

        var teamUsers = [];

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
						var teamUser = {};
						teamUser.id  = id;
						teamUser.userID = row.USERID;
						teamUser.teamID = row.TEAMID;
                        teamUsers.push(teamUser);						
                    }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + teamUsers);
						resolve(teamUsers);
                    }
                }
            );
			});
		});	
}


exports.getAllTeamUsers=getAllTeamUsers;
function getAllTeamUsers(db) {
		console.log("Entering getAllTeamUsers");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT ID, USERID, TEAMID FROM TEAMUSER ";
           
        var teamUsers = [];

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
						var teamUser = {};
						teamUser.id  = row.ID;
						teamUser.userid = row.USERID;
						teamUser.teamid = row.TEAMID;
                        teamUsers.push(teamUser);
                    }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + teamUsers);
						resolve(teamUsers);
                    }
                }
            );
			});
		});	
	
}


exports.getChannel;
function getChannel(db, id) {
		console.log("Entering getChannel");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT NAME, TEAMID, DESCRIPTION, TYPE FROM CHANNEL "
             + "  WHERE ID = '" + id + "'";

        var Channels = [];

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
						var channel = {};
						channel.id  = id;
						channel.name = row.NAME;
						channel.teamID = row.TEAMID;
						channel.description = row.DESCRIPTION;
						channel.type = row.TYPE;
                        channels.push(channel);						
                    }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + channels);
						resolve(channels);
                    }
                }
            );
			});
		});	
}


exports.getAllChannels=getAllChannels;
function getAllChannels(db) {
		console.log("Entering getAllChannels");
		
		return new Promise((resolve, reject) => {

        var query = "SELECT ID, NAME, TEAMID, DESCRIPTION, TYPE FROM CHANNEL ";
           
        var Channels = [];

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
						var channel = {};
						channel.id  = row.ID;
						channel.name = row.NAME;
						channel.teamid = row.TEAMID;
						channel.description = row.DESCRIPTION;
						channel.type = row.TYPE;
                        teamUsers.push(channel);
                    }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + channels);
						resolve(channels);
                    }
                }
            );
			});
		});	
	
}



exports.getChannelData=getChannelData;
function getChannelData(db, userid) {
		console.log("Entering getChannelData");
		
		return new Promise((resolve, reject) => {

        var query = "select user.name as 'USER_NAME'"
				+		  ",user.password"
				+		  ",user.email"
				+		  ",teamuser.teamid"
				+		  ",team.name as 'TEAM_NAME'"
				+		  ",channel.id"
				+		  ",channel.name as 'CHANNEL_NAME'"
				+		  ",channel.description"
				+		  ",channel.type"
				+     "from user, teamuser, channel, team"
		        +    "WHERE ID = '" + userid + "'";
				+	   "and user.id = teamuser.userid" 
				+	   "and teamuser.teamid = channel.teamid"
				+	   "and teamuser.teamid = team.id";
	           
        var Channels = [];

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
						var channel = {};
						channel.userid  = userid;
						channel.user_name  = row.USER_NAME;
						channel.user_password  = row.PASSWORD;
						channel.user_email = row.EMAIL;
						channel.team_id = row.TEAMID;
						channel.team_name = row.TEAM_NAME;
						channel.channel_id = row.ID;
						channel.channel_name = row.CHANNEL_NAME;
						channel.channel_desc = row.DESCRIPTION;
						channel.channel_type = row.TYPE;
                        teamUsers.push(channel);
                    }
                },
                 function (err, nRows) {
					console.log("  Entering func2");
                    if (err) {
                        reject(err);
                    } else {
                        //resolve(JSON.stringify(teams));
						console.log("  resolve func2 rows:" + nRows);
						console.log("  resolve func2:" + channels);
						resolve(channels);
                    }
                }
            );
			});
		});	
	
}




/*

module.exports = {

	getConnection : function (filename) {
		console.log("  Entering getConnection");
		//var express = require('express');
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
*/


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
 

//var conn = module.exports.getConnection('slack.db');
//var actual = module.exports.getTeam(conn, 'Boston');    // <------- Edit t






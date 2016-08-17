var asserts = require('assert');
//var db = require('../db.js');
var db = require('./SlackDB.js');
//require("./lodash-koans/node_modules/must/register");
//var _ = require('lodash');


// create slack.db if it doesn't exist
describe('Db module', () => {

    var conn = db.getConnection('slack.db');
    console.log("Got the connection!");
    //configuew connection
   // before(() => {
   //     conn.transact();
    //});
   // after(() => {
    //    conn.rollback;
    //});

    it('given a team ID, return the team name of that team', (done) => {
        console.log("Entering IT");
        console.log("connection:" + conn);
        var teamID = 'Boston';
        //var expected = ['Orange', 'Blue', 'Red', 'Green'];
        var expected = ['Red Sox'];
        var actual = db.getTeam(conn, teamID);    // <------- Edit this line
        var teamName=[];
        actual.then(
        (val) => {
            //res.send(val);
            console.log('val: ' + val);
            teamName = val;
            console.log("  teamName: " + teamName);
			asserts(teamName, expected);
			done();
        },
        (err) => {
            console.log('oh no!', err);
        }
		
		
		
    );


        console.log("  expected: " + expected);
        console.log("  actual  : " + actual);
        console.log("  teamName: " + teamName);
        //asserts(teamName, expected);
    });
	
	
	
	it('return all team rows', (done) => {
        console.log("Entering ITT");
        console.log("connection:" + conn);
        //var teamID = 'Boston';
        //var expected = ['Orange', 'Blue', 'Red', 'Green'];
		//var expected = [['Boston', 'Red Sox'], ['Baltimore', 'Colts']];
		//var expected = [{'Boston': 'Red Sox'}, {'Baltimore': 'Colts'}];
		var expected = [{'ID': 'Boston', 'NAME:': 'Red Sox'}, {'ID': 'Baltimore', 'NAME': 'Colts'}];
        var actual = db.getAllTeams(conn);    // <------- Edit this line
        var teamName=[];
        actual.then(
        (val) => {
            //res.send(val);
            console.log('val: ' + val);
            teamName = val;
            console.log("  teamName: " + teamName);
			//asserts(teamName, expected);
			
			/*
			console.log('Traversing return set');
			//console.log('  val size: ' + val.size);
			console.log('  val len : ' + val.length);
			for (var team in val) {
				console.log('Processing a team!');
				team.keys(o).forEach(function(key) {
					var vam = o[key];
					console.log("  Key: " + o[key]);
					console.log("  Vam: " + vam);
				});
				//console.log( myArr[index] );
			}	
			*/
			
			asserts(teamName, expected);
			
			
			
			done();
        },
        (err) => {
            console.log('oh no! yeah', err);
        }
		
		
		
    );
	
	//var myArr = [{a:1, b:2}, {c:3, d:4}];
	console.log('Traversing return set2');
	for (var team in actual) {
		console.log('Processing a team!');
		team.keys(o).forEach(function(key) {
			var val = o[key];
			console.log("  Key: " + o[key]);
			console.log("  Val: " + val);
		});
			//console.log( myArr[index] );
	}
			/*
			actual.keys(o).forEach(function(key) {
				var val = o[key];
				console.log("  Key: " + o[key]);
				console.log("  Val: " + val);
			});
			*/

        console.log("  expected: " + expected);
        console.log("  actual  : " + actual);
        console.log("  teamName: " + teamName);
        //asserts(teamName, expected);
    });

	
	
	it('insert team row', (done) => {
        console.log("Entering ITTT");
        console.log("connection:" + conn);
		var team = {};
		team.ID = 'Columbia';
		team.NAME = 'Flyers';
		
		console.log("team.ID: " + team.ID);
		
		
        //var teamID = 'Boston';
        //var expected = ['Orange', 'Blue', 'Red', 'Green'];
		//var expected = [{'Boston': 'Red Sox'}, {'Baltimore': 'Colts'}];
		var expected = [{'ID': 'Boston', 'NAME': 'Red Sox'}, {'ID': 'Baltimore', 'NAME': 'Colts'}];
		
        var actual = db.insertTeam(conn, team );    // <------- Edit this line
        var teamName=[];
        actual.then(
        (val) => {
            //res.send(val);
            console.log('val: ' + val);
            teamName = val;
            console.log("  teamName: " + teamName);
			asserts(teamName, expected);
			done();
        },
        (err) => {
            console.log('oh no! really', err);
        }
		
		
		
    );


        console.log("  expected: " + expected);
        console.log("  actual  : " + actual);
        console.log("  teamName: " + teamName);
        //asserts(teamName, expected);
    });
	
	
	
	
	it('getChannelData', (done) => {
        console.log("Entering getChannelData");
        console.log("connection:" + conn);
        //var teamID = 'Boston';
        //var expected = ['Orange', 'Blue', 'Red', 'Green'];
		//var expected = [['Boston', 'Red Sox'], ['Baltimore', 'Colts']];
		//var expected = [{'Boston': 'Red Sox'}, {'Baltimore': 'Colts'}];
		var expected = [{'userid': 'JB', 'user_name': 'Josie Benedict', 'password:': 'password', 'email': 'josie@gmail.com', 'team_id': 'Boston', 'team_name': 'Red Sox', 'channel_id': 'ABC', 'channel_name': 'American Broadcasting Corporation', 'channel_desc:': 'TV Station', 'channel_type:': 'Public'}, {'userid': 'JB', 'user_name': 'Josie Benedict', 'password': 'password', 'email': 'josie@gmail.com', 'team_id:': 'Baltimore', 'team_name': 'Colts', 'channel_id': 'CBS', 'channel_name': 'Central Broadcasting Corporation', 'channel_desc': 'TV Station', 'channel_type': 'Public'}];
        var actual = db.getChannelData(conn, 'JB');    // <------- Edit this line
        var channelData=[];
        actual.then(
        (val) => {
            //res.send(val);
            console.log('val: ' + val);
            teamName = val;
            console.log("  channelData: " + channelData);
			//asserts(teamName, expected);
			
			/*
			console.log('Traversing return set');
			//console.log('  val size: ' + val.size);
			console.log('  val len : ' + val.length);
			for (var team in val) {
				console.log('Processing a team!');
				team.keys(o).forEach(function(key) {
					var vam = o[key];
					console.log("  Key: " + o[key]);
					console.log("  Vam: " + vam);
				});
				//console.log( myArr[index] );
			}	
			*/
			
			asserts(channelData, expected);
			
			
			
			done();
        },
        (err) => {
            console.log('oh no! yeah', err);
        }
		
		
		
    );
	
	//var myArr = [{a:1, b:2}, {c:3, d:4}];
	console.log('Traversing return set3');
	for (var team in actual) {
		console.log('Processing b team!');
		team.keys(o).forEach(function(key) {
			var val = o[key];
			console.log("  Key: " + o[key]);
			console.log("  Val: " + val);
		});
			//console.log( myArr[index] );
	}
			/*
			actual.keys(o).forEach(function(key) {
				var val = o[key];
				console.log("  Key: " + o[key]);
				console.log("  Val: " + val);
			});
			*/

        console.log("  expected: " + expected);
        console.log("  actual  : " + actual);
        console.log("  teamName: " + teamName);
        //asserts(teamName, expected);
    });
	
	
	
	
	
	
	
	
	
});



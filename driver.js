//var asserts = require('assert');
//var db = require('../db.js');
var db = require('./SlackDB.js');
//require("./lodash-koans/node_modules/must/register");
//var _ = require('lodash');

var returnData = [];
var conn = db.getConnection('slack.db');
console.log('getConnection called');

var actual = db.getAllTeams(conn); 
actual.then(
        (val) => {
			console.log('We got the promise');
            //console.log('val: ' + val);
            returnData = val;
            console.log("  returnData: " + returnData);
			
			console.log('Traversing return set');
			console.log('  val length: ' + val.length);
			//console.log('  returnData len : ' + returnData.length);
			
			
			console.log('Traversing return set');
			//console.log('  val size: ' + val.size);
			console.log('  returnData len : ' + returnData.length);
			for (var team in returnData) {
			console.log('Processing a team!');
			if (returnData.hasOwnProperty(team))
			{
				console.log("Return obj:" + returnData[team]);
				console.log("Return ID:" + returnData[team].id);
				console.log("Return Name:" +returnData[team].name);
				
			}
			//console.log('  ID  : ' + team.ID);
			//console.log('  NAME: ' + team.NAME);
			// team.keys(o).forEach(function(key) {
				// var vam = o[key];
				// console.log("  Key: " + o[key]);
				// console.log("  Vam: " + vam);
			// };
				// console.log( myArr[index] );
			}	
			
			
			
			
			
			
        },
        (err) => {
            console.log('oh no!', err);
        }
		);
	
	/*
	console.log('Traversing return set');
	//console.log('  val size: ' + val.size);
	console.log('  returnData len : ' + returnData.length);
	for (var team in returnData) {
		console.log('Processing a team!');
		team.keys(o).forEach(function(key) {
			var vam = o[key];
			console.log("  Key: " + o[key]);
			console.log("  Vam: " + vam);
		};
				//console.log( myArr[index] );
	}	
	*/
/*

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
*/	
	
/*	
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
			
			
			
			asserts(teamName, expected);
			
			
			
			done();
        },
        (err) => {
            console.log('oh no! yeah', err);
        }
		
		
		
    );
	*/
	
	/*
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
			

        console.log("  expected: " + expected);
        console.log("  actual  : " + actual);
        console.log("  teamName: " + teamName);
        //asserts(teamName, expected);
    });
	*/
	
	/*
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
});

*/

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

    it('given a team name, return all channel names of that team', (done) => {
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

});
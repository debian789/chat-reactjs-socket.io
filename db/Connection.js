var pg = require('pg');

var conString = "postgres://chatuser:123456@localhost/chat"



function db(){

pg.connect(conString,function(err,client,done){

if(err){
	return console.error('error fetching client from pool', err);
}

client.query('SELECT $1::int AS number',['1'],function(err,result){
	done();

	if(err){
		return console.log('error al correr query',err);
	}

	console.log(result.row[0].number);
})


});

}

module.exports = db;





// Db chat 
// chatuser 123456

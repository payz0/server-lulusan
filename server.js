let express = require('express'),
	app = express(),
	PORT = process.env.PORT || 8080,
	router = require('./router.js'),
	cors   		= require('cors');

	app.use(cors());
	//pengganti bodyparser yang deprecated
	app.use(express.json());
	app.use(express.urlencoded({extended: true }));
	
	app.use('/',router);
	
	

	


if(!PORT){
	throw new Error('PORT tidak ada')
}else{
	app.listen(PORT,()=>{console.log(`running di ${PORT}`)})
}
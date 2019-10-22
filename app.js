const express = require('express');
const app = express(); //express호출
const path = require('path');
var connect =require('./models');
connect();

app.use(express.static(path.join(__dirname, 'public/'))); //app안의 미들웨어를 등록할 수 있는 메소드인 use 사용 + path지정
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));
const member_router = require('./routes/member_router');
app.use('/member', member_router)

app.listen(3000, function() {
    console.log('3000 server is ready');
});
const express = require('express');
const path = require('path'); //파일의 경로를 지정하기 위한 것
const app = express();

app.set('port', process.env.PORT || 3000); //서버에 속성을 부여하는 것이다. 전역변수 느낌

app.use((req, res, next) => {
    console.log('모든 요청에 실행하고 싶어요.');
    next(); //미들웨어는 넥스트를 하지 않으면 다음 코드가 실행되지 않는다. 
});

app.post('/', (req, res) => {
    res.send('hello express!');
});

app.get('/category/Javascript', (req, res) => {
    res.send('hello Javascript');
});

// app.get('/category/:name', (req, res) => {
//     res.send('hello $(req.params.name') //와일드카드는 next를 통해 순서 조절이 불가능하므로 겹치는 것의 뒤에 가도록 위치하는 게 좋다. 
// });
//와일드카드가 있으면 404에러가 뜨지 않아 주석처리

app.get('/', (req, res) => { //req의 메소드와 url
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.send('hello express!');
});

app.use((req, res, next) => { //라우터들 밑에, 에러처리보다는 위에 작성한다. 
    res.send('404입니다.');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.send('에러발생'); //없는 라우터에 대해 실행해도 해당 에러 미들웨어로 처리된다. 
});

app.listen(app.get('port'), () => {
   console.log('익스프레스 서버 실행');  
});
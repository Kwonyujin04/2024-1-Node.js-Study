# [3주차]섹션 2. 1-8

REPL(Read-Eval-Print-Loop)는 단일 사용자의 입력을 읽고, 평가(실행)하고, 결과를 사용자에게 반환하는 단순한 상호작용 환경이다. 

cmd에서 파일로 cd할 때 ‘.’는 자기 자신 폴더 그대로를 지칭하고 ‘..’를 하면 부모 파일로 올라가게 된다. 

ctrl + ` = 터미널 실행

모듈

모듈은 특정한 기능을 하는 함수나 변수들의 집합이다. 

module.exports === exports ==={}빈 객체, exports에 직접 값을 넣지 않는 이상 이 관계가 유지된다. 

한가지를 모듈화할 때는 module.exports에 넣고 두가지 이상은 exports에 넣는다. 만약 exports를 썼으면 module.exports는 쓰면 안된다. 이는 참조관계가 끊길 수 있기 때문이다. 

this

this는 js에서 전역객체이며 node에서는 이름이 없을 경우 전역객체이다. 그리고 빈 객체{} = module.exports이를 통해 보면 fuction안의 this = global() = true를 통해 알 수 있다. 

require(`./var`)

이는 변수를 받아오지 않고 실행만 하는 것이다. require.main으로 실행한 파일을 알아낼 수 있다. 그 외에도 캐시를 지우거나 node를 껐다가 키지 않더라도 코드가 업데이트 되도록 할 수 있다. 

하드디스트 정보를 메모리를 옮겨오는 것을 캐싱이라고 한다.

다른 모듈의 exports를 불러올 수 있다. 

순환참조

require(`./var1`)

require(`./var2`)

이런식으로 있으면 서로 참조를 한다. 여기에서 무한 순환참조를 막기 위해 빈 객체로 채워주기도 한다. 

node 내장객체

외우지 말 것

global.window/ global.require과 같이 global이 있는데 이렇게 하면 여러 파일에서 공유할 수 있는 형태가 된다. 하지만 너무 많은 파일을 이용할 경우 찾기 힘들기 때문에 모듈을 쓰자

set immediate: 바로 실행하는 것으로 백그라운드로 넘어가서 동시에 코드를 실행할 수 있다. 

백그라운드로 가는 코드들은 우선순위가 있을 경우 순위가 지켜지지만 없을경우 순서가 바뀐다. 

내장모듈

os.cpus

node os: cpu에 대한 정보를 받아온다. node는 싱글스레드이기 때문에 남는 코어가 존재한다. 따라서 os스레드와 node스레드는 다른 것이다. (실제 실행결과 본인의 컴퓨터 cpu는 16개의 스레드를 지님을 알게 되었다. )

path = require(`path`): 자동으로 경로처리를 해준다. 

경로를 표시할 때 절대경로는 파일의 경로를 처음부터 시작해 작성한 것이고 상대경로는 .이나 ..으로 시작해 경로를 상대적으로 나타낸 것이다. 

DNS: 주소

A: IP

MX: 메일주소

CNAME: 별명

ANY: 나머지것들

이들은 모두 도메인을 다양하게 사용하도록 하는 레코드이다. 

버퍼: 데이터를 모으고 다 모은 다음에 전송하는 암호화 방식이다. 한 번에 처리하는 것이 특징이다. (버퍼=파일사이즈)

스트링: 버퍼들이 계속 전송되는 것이다. 나누어서 처리하는 것으로 다 보낸 다음에 하나로 합치게 된다. 

문자열 → 버퍼 → 스트링

concat으로 버퍼를 합쳐줄 수 있다. 

allac(5): 5바이트 빈 버퍼

data push.chunk: 스트링을 순서대로 보내준다. 스트링은 비동기로 err처리를 해주어야 작동한다. 

highwaterMark로 쪼개지는 크기를 지정해줄 수 있다. 

스트링으로 텍스트를 읽을 경우 메모리를 절약할 수 있다. 한 번에 읽어들일 경우 서버가 문자 크기만큼 필요해진다. 하지만 스트링으로 쪼개서 할 경우 메모리 효율화가 가능하다. 

 

과제 

1. 널 병합 연산자와 옵셔널 체이닝 연산자의 차이점은?
    
    널 병합 연산자는 null r과 undefined를 구분해서 뒤에 있는 값을 할당하는 연산자이고 옵셔널 체이닝 연산자는 null이나 undefined에 접근하는 경우 에러를 방지해 주는 것으로 역할이 다르다. 
    
2. 널 병합 연산자와 옵셔널 체이닝 연산자의 사용 사례는?
    
    주로 옵셔널 체이닝 연산자를 사용해 null, undifined를 접근해도 오류가 발생하지 않도록 하고 해당 반환값을 널 연산자를 이용해 처리하는 식으로 사용한다. 
    
3. 옵셔널 체이닝 연산자 사용 예시 코드 짜기

```
const c = undefined;
console.log(c?.d); // undefined
```

1. 널 병합 연산자 사용 예시 코드 짜기

```
const e = null;
const f = e ?? "fff";
console.log(f); // 'fff'
```
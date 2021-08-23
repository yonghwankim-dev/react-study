
import reactLogo from '../reactLogo.png';

{
  // 2. JSX 소개
}
function App() {
  {
    // 2.1 JSX에 표현식 포함하기 1
    // JSX의 중괄호 안에는 유효한 모든 JS 표현식을 넣을 수 있다.
  }
  const name = "Jsh Perez";
  const element = <h1>Hello, {name}</h1>

  {
    // 2.1 JSX에 표현식 포함하기 2
    // {}(중괄호) 안에는 변수, 함수, 배열 등 유효한 표현식을 넣을 수 있다.
  }
  const user = {
    firstName : "Harper",
    lastName : "Perez",
    avatarUrl : './reactLogo.png'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const element2 = (<h1>Hello, {formatName(user)}</h1>);


  {
    // 2.2 JSX도 표현식이다.
    // 컴파일이 끝나면 JSX 표현식도 JS 객체가 된다.
    // 이는 JSX를 변수, 인자,함수로 사용 및 반환이 가능하다.
    // 아래 예시에서 '{getGreeting(user)}'와 같이 중괄호안에
    // 함수도 호출이 가능하다. 
  }
  function getGreeting(user){
    if(user.firstName!=undefined && user.lastName!=undefined){
      return (<h1>Hello, {formatName(user)}!!!!</h1>);
    }
    return (<h1>Hello, Stranger.</h1>);
  }

  const empty_user = {};
  const element3 = (<h1>{getGreeting(user)}</h1>);
  const element4 = (<h1>{getGreeting(empty_user)}</h1>);

  {
    // 2.3 JSX 속성 정의
    // 중괄호를 사용하여 속성에 js 표현식을 삽입이 가능하다.
  }
  const element5 = (<img src={reactLogo}/>);

  {
    // 2.4 JSX로 자식 정의
    // JSX는 자식을 포함시킬수 있습니다.
  }
  const element6 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  )

  {
    // 2.5 JSX는 주입 공격을 방지합니다.
    // JSX에 사용자 입력을 삽입하는 것은 안전합니다.
    // 기본적으로 ReactDOM은 JSX에 삽입된 모든 값을 랜더링 하기 전에
    // 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은
    // 주입되지 않습니다.
  }
  const response = {
    potentiallyMaliciousInput : "hello title"
  };
  const title = response.potentiallyMaliciousInput;

  // element7은 안전합니다.
  const element7 = <h1>{title}</h1>
  

  return (
    <>
    <div className="App">     
      {element}
    </div>
    <div className="App">     
      {element2}
    </div>
    <div className="App">     
      {element3}
      {element4}
    </div>
    <div className="App">     
      {element5}
    </div>
    <div className="App">     
      {element6}
    </div>
    </>
  );
}



export default App;

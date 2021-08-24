import React from "react";

// 1. 함수 컴포넌트와 클래스 컴포넌트
// 1.1 함수 컴포넌트 생성
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// 1.2 클래스 컴포넌트 생성
class Welcome_Class extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function App() {
    // 2. 컴포넌트 렌더링
    // React 엘리먼트를 DOM 태그로 표현 (before)
    // const element = <div/>
    // React 엘리먼트를 사용자 정의 컴포넌트로 표현 (after)
    const element = <Welcome name="Sara" />

    // step1 <Welcome name="Sara"/> 엘리먼트로 ReactDOM.render() 호출
    // step2 React는 {name:"Sara"}를 props로 전달하여 Welcome 컴포넌트 호출
    // step3 Welcome 컴포넌트는 결과적으로 <h1>Hello, Sara</h1> 엘리먼트를 반환
    // step4 ReactDOM은 <h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트

    // 주의 : 컴포넌트의 이름은 항상 대문자로 시작하여야 합니다.

    // 3. 컴포넌트 합성
    // 컴포넌트는 또 다른 컴포넌트를 호출할 수 있습니다.
    // 실습 : Welcome을 여러번 렌더링하는 element2 컴포넌트 생성
    const element2 = (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );


    return (
        <>
            {element}
            {element2}
        </>
    );
}

// 4. 컴포넌트 추출
// before
function Comment_before(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
}
// step1 Avatar 이미지 태그 추출
function Avatar(props){
    return (
        <img className="Avatar"
              src={props.user.avatarUrl}
              alt={props.user.name}
            />
    );
}
// step2 UserInfo-name 추출
function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
}

// after
function Comment_after(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
}

// props는 읽기 전용입니다.
// 함수컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안됩니다.
// 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.
// OK (순수 함수)
function sum(a,b){
    return a+b;
}
// invalid
function withdraw(account, amount){
    account.total -= amount;
}


export default App;

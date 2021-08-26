import React from "react";

// 1. 조건부 렌더링
function UserGreeting(props){
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props){
  return <h1>Please Sign up.</h1>;
}
// 사용자의 로그인 상태에 맞게 위 2개의 컴포넌트 중 하나를 보여주는 Greeting 컴포넌트
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}

// 2. 엘리먼트 변수
// 엘리먼트를 저장하기 위해 변수를 사용가능함. 출력의 다른 부분은
// 변하지 않은채로 컴포넌트의 일부를 조건부로 렌더링
function LoginButton(props){
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state={isLoggedIn:false};
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
    this.setState(({isLoggedIn:false}));
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    }else{
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }
}

// 3. 논리 && 연산자로 if를 인라인으로 표현하기
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
const messages = ['React', 'Re: React', 'Re:Re: React'];

// 4. 조건부 연산자로 If-Else 구문 인라인으로 표현하기
// 삼항 연산자를 활용하여 표현 (condition ? true : false)
class LoginStatus extends React.Component{
  constructor(props) {
    super(props);
    this.state={isLoggedIn:false};
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b>
      </div>
    );
  }
}
// 더 큰 표현식에도 이러한 구문을 사용 가능합니다.
class LoginStatus2 extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state={isLoggedIn:false};
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
    this.setState(({isLoggedIn:false}));
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {
          isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick}/>
          : <LoginButton onClick={this.handleLoginClick}/>
        }
      </div>
    );
  }
}

// 5. 컴포넌트가 렌더링 하는 것을 막기
// 가끔 다른 컴포넌트에 의해 렌더링될때 컴포넌트 자체를 숨기고 싶을때가 있습니다.
// 이때는 렌더링 결과를 출력하는 대신 null을 반환하면 해결할 수 있습니다.

// 아래의 WarningBanner 컴포넌트에서 warn 프로퍼티의 값에 의해서 렌더링됩니다.
// wran prop이 false라면 컴포넌트는 렌더링하지 않게 됩니다.
function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  return(
    <div className="warning">
      Warning!
    </div>
  );
}
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning : false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState(state =>({
      showWarning : !state.showWarning
    }));
  }

  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

function App() {
  
  return (
    <>
    <Greeting isLoggedIn={false}/>
    <LoginControl/>
    <Mailbox unreadMessages={messages}/>
    <LoginStatus/>
    <LoginStatus2/>
    <Page/>
    </>
  );
}

export default App;

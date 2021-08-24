import React from "react";

function App() {
  // html (before)
  const button1 = <button onClick="activateLasers()">Activate Lasers</button>
  // react (after)
  const activateLaswers = ()=>{console.log("call activateLaswers function");}
  const button2 = <button onClick={activateLaswers}>Activate Lasers</button>

  // html, form 제출 (before)
  const form1 = (
    <form onsubmit="console.log('You clicked submit.'); return false">
      <button type="submit">Submit</button>
    </form>
  );

  // react, form 제출 (after)
  const form2 = ()=>{
    const handleSubmit = (e)=>{
      // React에서는 false 반환해도 기본 동작을 방지할 수 없기 때문에 preventDefault 명시적으로 호출해야한다.
      e.preventDefault();
      console.log("You clicked submit.");
    }

    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
  return (
    <>
    {form2()}
    <Toggle/>
    <LoggingButton/>
    </>
  );
}

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn : true};
    
    // 콜백에서 'this'가 작동하려면 아래와 같이 바인딩 해주어야 한다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isToggleOn : !prevState.isToggleOn
    }));
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component{
  constructor(props){
    super(props);
  }
  handleClick(){
    console.log("this is:",this);
  }
  render(){
    // 이 분법은 'this'가 handleClick 내에서 바인딩되도록 합니다.
    return (
      <>
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
      
      {/* 이벤트 핸들러에 인자 전달하기, e인자는 맨 마지막에 위치
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> 
      */}
      </>
    );
  }
}

export default App;

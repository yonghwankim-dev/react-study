
// map() 함수를 이용하여 numbers 배열의 값을 두배로 생성후 반환
function Map_test(){
  const numbers = [1,2,3,4,5];
  const doubled = numbers.map((number)=>number*2);
  
  return doubled;
}

// 1. 여러개의 컴포넌트 렌더링 하기
function Map_test2(){
  const numbers = [1,2,3,4,5];
  const listItems = numbers.map((number)=>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// 2. 기본 리스트 컴포넌트 (key 추가)
// key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다.
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number)=>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// 3. Key로 컴포넌트 추출하기
function ListItem(props){
  return <li>{props.value}</li>
}
function NumberList2(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number)=>
    <ListItem key={number.toString()} value={number}/>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// key는 형제 사이에서만 고유한 값이어야 한다
// key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없습니다
function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}
        </li>
        )}
    </ul>
  );
  const content = props.posts.map((post)=>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  // react에서 key는 힌트를 제공하지만 컴포넌트로 전달하지는 않음
  // 컴포넌트에서 key와 동일한 값이 필요하면 다른 이름의 prop으로 명시적으로 전달
  function Post(props){
    return (
      <h1 id={props.id} title={props.title}>{props.title}</h1>
    )
  }
  const content2 = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
  );
  return(
    <div>
      {sidebar}
      <hr/>
      {content}
      <hr/>
      {content2}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

// 4. JSX에 map() 포함시키기
// 중괄호안에 모든 표현식을 포함시킬수 있으므로 map() 함수의 결과를
// 인라인으로 처리할 수 있음
// 하지만 남발하지 않은것이 좋음, map() 함수가 너무 중첩되면 컴포넌트로
// 따로 추출하는 것이 좋음
function NumberList3(props){
  const numbers = props.numbers;
  return (
    <ul>{numbers.map((number)=>
      <ListItem key={number.toString()} value={number}/>
    )}</ul>
  );
}
function App() {
  return (
    <div>
      <Map_test/>
      <Map_test2/>
      <NumberList numbers={[1,2,3,4,5]} />
      <NumberList2 numbers={[1,2,3,4,5]} />
      <Blog posts={posts}/>
      <NumberList3 numbers={[1,2,3,4,5]} />
    </div>
  );
}

export default App;

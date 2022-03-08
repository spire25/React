import Nav from "./Nav";
import { Component } from "react";

class Article extends Component{
  render(){
      return(
          <article>
              <h3>{this.props.title}</h3>
              {this.props.desc}
          </article>
      );
  }
}
class App extends Component{
  state = {
    article: {title:"welcome", desc:"React & Ajax!"},
    list: []
  }


  componentDidMount(){ // 컴포넌트 로딩 완료 후, 호출되는 메소드
    fetch("list.json")// list.json 연결 // fetch 리소스에 연결
    .then(function(result){ // 연결 성공하면 함수 실행
        var temp = result.json() // json -> js객체를 포함하는 객체로 변경
        console.log("temp ", temp);
        return temp;
    })
    .then(function(js){ // js 객체만 추출
        //console.log(js);// 변경된 js 객체 출력
        this.setState({
            list: js
        });
    }.bind(this))
  }


  render(){
    return(
      <div className="App">
        <h1>Ajax 홈</h1>
        <Nav 
          list={this.state.list}
          onClick={function(id){
          //console.log(id); // 하위 컴포넌트에서 넘겨진 id 출력
          
          // fetch()로 리소스 연결
          fetch(id+".json")
          .then(function(result){
            return result.json(); // json -> js객체를 포함하는 객체로 변경
          })
          .then(function(js){
            this.setState({
              article: {title: js.title, desc: js.desc}
            });
          }.bind(this)) // onClick안의 함수도 this쓰므로 bind걸어주기
        }.bind(this)} />
        <Article title={this.state.article.title} desc={this.state.article.desc} />
      </div>
    );
  }
}

export default App;

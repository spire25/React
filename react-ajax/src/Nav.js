import { Component } from "react";

class Nav extends Component{
    /*state= {
        list: []
    }*/
    /*
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
    } */

    render(){
        var listTag = [];
        for(var i=0; i<this.props.list.length; i++){
            var li = this.props.list[i];
            listTag.push(
            <li key={li.id}> 
                <a href={li.id} data-id={li.id} onClick={function(e){
                    e.preventDefault();
                    this.props.onClick(e.target.dataset.id); // data-id={li.id}호출
                }.bind(this)}>
                    {li.title}
                </a> 
            </li>)

        }
        return(
            <nav>
                <ul>
                    {listTag}
                    <br/>
                    <li><a href="1">자바</a></li>
                    <li><a href="2">파이썬</a></li>
                    <li><a href="3">오라클</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
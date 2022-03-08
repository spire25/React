import { Component } from "react";

class FetchGet extends Component{
    componentDidMount(){ // 컴포넌트 로딩 후 수행
        // spring 연결
        fetch("http://127.0.0.1:8080/rest_addr/read.json") // all select
        //fetch("http://127.0.0.1:8080/rest_addr/read/10.json") // seq 검색
        //fetch("http://127.0.0.1:8080/rest_addr/read.json?na=a") // name 검색
        .then(function(response){ // 정상 처리시 실행
            var tmp = response.json();
            console.log("1", tmp);
            return tmp;
        })
        .catch(function(error){ // 예외, 오류 발생시 실행
            console.log("2", error);
        })
        .then(function(js){ // 
            console.log("3", js);
        })
    }

    render(){
        return(
            <h1>FetchGet</h1>
        );
    }
}

export default FetchGet;
import { Component } from "react";

class FetchDelete extends Component{
    componentDidMount(){ // 컴포넌트 로딩 후 수행
        // spring 연결
        fetch("http://127.0.0.1:8080/rest_addr/delete/26.json", {
            method: "DELETE"
        })
        /* // 반환 값이 없기 때문에 굳이 실행할 이유가 없음
        .then(function(response){ // 정상 처리시 실행 (then 순차적 수행)
            var tmp = response.json();
            console.log("1", tmp);
            return tmp;
        })
        .catch(function(error){ // 예외, 오류 발생시 실행
            console.log("2", error);
        })
        .then(function(js){ // 
            console.log("3", js);
        })*/
    }

    render(){
        return(
            <h1>FetchDelete</h1>
        );
    }
}

export default FetchDelete;
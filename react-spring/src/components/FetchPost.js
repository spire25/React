import { Component } from "react";

class FetchPost extends Component{
    componentDidMount(){ // 컴포넌트 로딩 후 수행
        // spring 연결
        fetch("http://127.0.0.1:8080/rest_addr/create.json", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},// json객체임을 인지하게 해줌
            body: JSON.stringify({name:'react!22', addr:'home!!22'}) // js일경우엔 -> 따옴표X name:'react!' / json은 따옴표o 'name':'react!'
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
            <h1>FetchPost</h1>
        );
    }
}

export default FetchPost;
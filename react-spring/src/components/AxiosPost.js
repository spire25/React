import { Component } from "react";
import axios from "axios"

class AxiosPost extends Component{
    componentDidMount(){ // 컴포넌트 로딩 후 수행
        // spring 연결
        axios.post("http://127.0.0.1:8080/rest_addr/create.json", {"name":"react", "addr":"help"})
        .then(function(response){ // 정상 처리시 실행
            console.log("1", response.data);
        })
        .catch(function(error){ // 예외, 오류 발생시 실행
            console.log("2", error);
        })
        .then(function(){
            console.log("3");
        })
    }

    render(){
        return(
            <h1>AxiosPost</h1>
        );
    }
}

export default AxiosPost;
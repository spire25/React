import { Component } from "react";
import axios from "axios"

class AxiosDelete extends Component{
    componentDidMount(){ // 컴포넌트 로딩 후 수행
        // spring 연결
        axios.delete("http://127.0.0.1:8080/rest_addr/delete/23.json")
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
            <h1>AxiosDelete</h1>
        );
    }
}

export default AxiosDelete;
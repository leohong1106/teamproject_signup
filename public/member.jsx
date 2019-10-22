var {Component} = React;
class Member extends Component{
    state = { name:'', id:'', pw:''};
    register_member=()=>{
      alert(this.name.value + this.id.value + this.pw.value);

      axios.post('member/register',
        {name: this.name.value,
        id: this.id.value,
        pw: this.pw.value})
        .then((response)=>{
            console.log(response);
            if (response.data.msg) {
                // alert(response.data.msg);
                this.setState({ name:this.name.value, id:this.id.value, pw:this.pw.value});
            }else {
                alert("회원가입을 실패했습니다.");
            }
            
        })
        .catch((error)=>{
            console.log(error);
        });

    //   $.post("member/register",
    //   {
    //   name: this.name.value,
    //   id: this.id.value,
    //   pw: this.pw.value
    //   },
    //   function(data, status){
    //   alert("Data: " + data + "\nStatus: " + status);
    //   });

    }
    render(){
        return(
            <div>
                <strong>회원가입 페이지에 오신 것을 환영합니다.</strong>
                <hr/>
                이름:<input ref={ref=>this.name=ref} type="text"/><br/>
                ID:<input ref={ref=>this.id=ref} type="text"/><br/>
                PW:<input ref={ref=>this.pw=ref} type="text"/><br/>
                <button id="register_member_btn" onClick={this.register_member}>회원가입</button>
                <hr/>
                {this.state.name}
                {this.state.id}
                {this.state.pw}
            </div>
        );
    }
}

ReactDOM.render(
    <Member/>
    ,document.getElementById("here")
);

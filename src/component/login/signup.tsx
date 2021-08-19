import React from 'react';
import { useState } from 'react';

const Signup = () => {
  const [ user, setUser ] = useState({
    email:'',
    username:'',
    password:''
  })

  const addUserInfo = (e:any) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const onSignup = (e:any) => {
    e.preventDefault();
    console.log(user)
  }

  return(
    <div className="sign-contents">
      <form className="sign-feilds" onSubmit={onSignup}>
        <input type="text" placeholder="이메일" name="email" onChange={addUserInfo}></input>
        <br />
        <input type="text" placeholder="아이디" name='username' onChange={addUserInfo}></input>
        <br />
        <input type="text" placeholder="비밀번호" name='password' onChange={addUserInfo}></input>
        <br />
        {/* <input type="text" placeholder="비밀번호 확인"></input>
        <br /> */}
        <button>확인</button>
        <br />
      </form>
    </div>
  )
}

export default Signup;
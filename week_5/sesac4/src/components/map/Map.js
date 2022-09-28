import React, { useState } from "react";

export const Map = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountArr, setAccountArr] = useState([]);

  // 추가 함수
  const register = () => {
    const account = {
      name: name,
      email: email
    };
    setAccountArr([...accountArr, account]);
  };

  function deleteArr(name) {
    console.log(name);
    setAccountArr(accountArr.filter(account => account.name !== name));
  }

  const search = () => {
    console.log(accountArr);
  };

  // onChange 함수
  const changename = e => {
    setName(e.target.value);
  };
  const changeemail = e => {
    setEmail(e.target.value);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      register();
    }
  };
  return (
    <div>
      <input type="text" name="name" placeholder="이름" onChange={changename} />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={changeemail}
        onKeyPress={handleKeyPress}
      />
      <button onClick={register}>등록</button>
      <button onClick={search}>확인</button>
      {accountArr.map((val, index) => {
        return (
          <div>
            <h1 key={val.name} onDoubleClick="deleteArr(${val.name})">
              {val.name} : {val.email}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

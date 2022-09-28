import React, { useState } from "react";
import "../../css/example5.css";

export const Example5 = () => {
  const [accounts, setAccounts] = useState([
    {
      writer: "염시온",
      title: "교과서"
    }
  ]);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [type, setType] = useState("작성자");
  const [searchText, setSearchText] = useState("");

  const handleOnClickBtn = () => {
    let account = {
      title: title,
      writer: writer
    };
    setAccounts([...accounts, account]);
    // setId(id++);
  };

  const handleSearchBtn = () => {
    let searchResultArr = [];
    if (type === "작성자") {
      searchResultArr = accounts.filter(val => {
        return val.writer === searchText;
      });
    } else if (type === "제목") {
      searchResultArr = accounts.filter(val => {
        return val.title === searchText;
      });
    }
    console.log(searchResultArr);
    setSearchResult(searchResultArr);
  };

  const handleGetAllBtn = () => {
    setSearchResult(accounts);
  };

  return (
    <div>
      <div className="inputBox">
        <div className="input">
          작성자 :{" "}
          <input
            type="text"
            name="writer"
            onChange={e => {
              setWriter(e.target.value);
            }}
          />
        </div>
        <div className="input">
          제목 :{" "}
          <input
            type="text"
            name="title"
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <button onClick={handleOnClickBtn}>작성</button>
      </div>

      <div className="searchBox">
        <select
          className="select"
          value={type}
          onChange={e => {
            console.log(e.target.value);
            setType(e.target.value);
          }}
        >
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={handleSearchBtn}>검색</button>
        <button onClick={handleGetAllBtn}>전체</button>
      </div>

      <div className="table">
        <table border="1">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((val, index) => {
              return (
                <tr key={index}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {val.title}
                  </td>
                  <td>
                    {val.writer}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="searchResult">
        {searchResult.length === 0
          ? "검색결과가 없습니다"
          : <div>
              <div>검색 결과</div>
              <table border="1">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResult.map((val, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {index + 1}
                        </td>
                        <td>
                          {val.title}
                        </td>
                        <td>
                          {val.writer}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>}
      </div>
    </div>
  );
};

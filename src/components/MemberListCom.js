import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMemberListThunk } from '../service/authThunk';
import styled from 'styled-components';

const ListWrapper = styled.div`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #800000;
        font-size: 40px;
        margin-bottom: 30px;
        font-weight: normal;
    }
`;

const StyledTable = styled.table`
    width: 500px;
    border-top: 1px solid #333;
    border-collapse: collapse;
    
    th, td {
        padding: 20px 0;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }

    th {
        font-size: 18px;
        font-weight: bold;
    }

    td {
        font-size: 16px;
    }

    .id-link {
        color: black;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            color: #ccc;
        }
    }
`;

const MemberListCom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { members } = useSelector(state => state.member);
  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getMemberListThunk());
  }, [dispatch]);

  const onIdClick = (username) => {
    if (isLoggedIn) {
      navigate(`/detail/${username}`);
    }
    else {
      alert("로그인이 필요합니다.");
      navigate('/login');
    }
  };

  return (
    <div style={{ paddingTop: "150px", textAlign: "center" }}>
      <h2>회원목록</h2>
      <table border="1" style={{ margin: "auto", width: "600px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th>아이디</th><th>비밀번호</th><th>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, idx) => (
            <tr key={idx}>
              <td
                onClick={() => onIdClick(m.username)}
                style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
              >
                {m.username}
              </td>
              <td>{m.password}</td>
              <td>{m.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberListCom;
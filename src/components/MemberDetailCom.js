import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteMemberThunk } from '../service/authThunk';

const DetailWrapper = styled.div`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 { color: #e47c01; font-size: 40px; margin-bottom: 30px; }
`;

const DetailTable = styled.table`
    width: 400px;
    border-top: 2px solid #333;
    border-collapse: collapse;
    td {
        padding: 15px;
        border-bottom: 1px solid #ccc;
    }
    .label { font-weight: bold; width: 150px; background: #f9f9f9; }
`;

const ButtonGroup = styled.div`
    margin-top: 20px;
    button {
        margin: 0 10px; padding: 10px 20px; cursor: pointer;
        border: 1px solid #ccc; background: white;
        &:hover { background: #eee; }
    }
`;

const MemberDetailCom = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { members } = useSelector(state => state.member);

  const user = members.find(m => m.username === username);

  const onDelete = async () => {
    await dispatch(deleteMemberThunk(username));
    navigate('/list'); 
  };

  if (!user) return <DetailWrapper><h2>정보를 찾을 수 없습니다.</h2></DetailWrapper>;

  return (
    <DetailWrapper>
      <h2>개 인 정 보</h2>
      <DetailTable>
        <tbody>
          <tr><td className="label">username</td><td>{user.username}</td></tr>
          <tr><td className="label">password</td><td>{user.password}</td></tr>
          <tr><td className="label">role</td><td>{user.role}</td></tr>
        </tbody>
      </DetailTable>
      <ButtonGroup>
        <button onClick={onDelete}>삭제</button>
        <button onClick={() => navigate(`/update/${user.username}`)}>수정</button>
      </ButtonGroup>
    </DetailWrapper>
  );
};

export default MemberDetailCom;
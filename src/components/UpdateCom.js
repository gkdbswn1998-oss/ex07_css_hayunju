import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateMemberThunk } from '../service/authThunk';
import StyledForm from './common/StyleForm';
import StyledInput from './common/StyleInput';
import StyledButton from './common/StyleButton';

const UpdateCom = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { members } = useSelector(state => state.member);
    
    const user = members.find(m => m.username === username);
    const [inputs, setInputs] = useState(user || { username: '', password: '', role: '' });

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(updateMemberThunk(inputs));
        if (result.meta.requestStatus === 'fulfilled') {
            alert("수정이 완료되었습니다.");
            navigate(`/detail/${inputs.username}`);
        }
    };

    return (
        <div style={{ paddingTop: "150px", textAlign: "center" }}>
            <h2>회원 정보 수정</h2>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput name="username" value={inputs.username} readOnly />
                <StyledInput name="password" value={inputs.password} onChange={onChange} placeholder="new password" />
                <StyledInput name="role" value={inputs.role} onChange={onChange} placeholder="new role" />
                <StyledButton type="submit" width="100%" background={["0,150,136", 0.5]}>
                    수정완료
                </StyledButton>
            </StyledForm>
        </div>
    );
};

export default UpdateCom;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from '../service/authThunk';
import StyledForm from './common/StyleForm';
import StyledInput from './common/StyleInput';
import StyledButton from './common/StyleButton';

const RegisterCom = () => {
    const [inputs, setInputs] = useState({ username: '', password: '', role: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(registerThunk(inputs));
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/login');
        }
    };

    return (
        <div style={{ paddingTop: "150px", textAlign: "center" }}>
            <h2 style={{ color: "chocolate" }}>회원 가입</h2>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput name="username" placeholder="username" onChange={onChange} />
                <StyledInput name="password" type="password" placeholder="password" onChange={onChange} />
                <StyledInput name="role" placeholder="role" onChange={onChange} />
                <StyledButton type="submit" width="100%" background={["100,100,100", 0.2]}>
                    REGISTER
                </StyledButton>
            </StyledForm>
        </div>
    );
};
export default RegisterCom;
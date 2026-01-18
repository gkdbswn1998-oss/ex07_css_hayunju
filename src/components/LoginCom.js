import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledInput from "./common/StyleInput";
import StyledForm from "./common/StyleForm";
import StyledButton from "./common/StyleButton";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";

const AuthBlock = styled.div`
   position: absolute; left: 0; top: 0; bottom: 0;right: 0; background-color: rgba(0,0,0,0.1);
`;
const LoginBox = styled.div`
   position: absolute; width: 360px; min-height: 200px; top: 150px; left: calc(50% - 180px);
   background-color: white; padding-top: 20px;  box-shadow: 0 0 8px rgba(0,0,0,0.3);
   border-radius: 5px;
  .logo-area {
        text-align: center; font-weight: bold; letter-spacing: 5px; font-size: 20px;
        border-bottom: 1px dotted olive; padding-bottom: 5px; width: 50%; margin: 0 auto;
        a{ color: darkcyan; &:hover { color: cyan;} }
    }
`;
const LoginCom = () => {
    const dispatch = useDispatch();
    const { username, password } = useSelector(state => state.input);

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("username:", username); // 
        console.log("password:", password); // 
        dispatch(loginThunk({ username, password }));
    };

    return (
        <AuthBlock>
            <LoginBox>
                <div className="logo-area"><Link to="/">탱이냥 이동</Link></div>
                <StyledForm onSubmit={onSubmit}>
                    <StyledInput 
                        name="username" 
                        placeholder="input username" 
                        value={username} 
                        onChange={onChange} 
                    />
                    <StyledInput 
                        name="password" 
                        type="password"
                        placeholder="input password" 
                        value={password} 
                        onChange={onChange} 
                    />
                    <StyledButton type="submit" width="100%" background={["178,235,244", 0.5]}>
                        LOGIN
                    </StyledButton>
                </StyledForm>
            </LoginBox>
        </AuthBlock>
    );
};
export default LoginCom;
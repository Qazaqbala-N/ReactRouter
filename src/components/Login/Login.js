import { useNavigate } from "react-router";

export default function Login({authed, setAuthed}) {
    const Navigate = useNavigate();
    function onLogin(){
        setAuthed(true);
        Navigate('/main');
    }
    return(
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                    <h6>Nurdaulet</h6>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <p>qwerty</p>
                </div>
                <button onClick={onLogin}>LOGIN</button>
            </div>
        </form>
    )
};

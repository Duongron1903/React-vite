import { Button, Input } from "antd";
import './style.css'; // Đổi lại tên file css
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const handleClick = () => {
        console.log('Check:', { fullName, Email, Password, PhoneNumber });
    }

    return (
        <div className="user-form">
            <div>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                        placeholder="Enter your full name"
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={Email}
                        onChange={(event) => { setEmail(event.target.value) }}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input
                        value={Password}
                        onChange={(event) => { setPassword(event.target.value) }}
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={PhoneNumber}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div>
                    <Button
                        onClick={handleClick}
                        type="primary" style={{ marginTop: '10px' }}>Create user</Button>
                </div>
            </div>
        </div>
    );
}
export default UserForm;
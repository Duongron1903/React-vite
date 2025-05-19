import { Button, Input, notification } from "antd";
import './style.css'; // Đổi lại tên file css
import { useState } from "react";
import axios from "axios";
import { createUserApi } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleClick = async () => {
        const res = await createUserApi(fullName, email, password, phone);
        console.log('Check res:', res);
        if (res.data) {
            notification.success({
                message: 'Create user successfully',
                description: `User ${res.data.fullName} has been created successfully`,
            })
        }

        console.log('Check res:', res.data);
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
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
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
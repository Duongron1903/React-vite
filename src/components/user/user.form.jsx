import { Button, Input } from "antd";
import './style.css'; // Đổi lại tên file css

const UserForm = () => {
    return (
        <div className="user-form">
            <div>
                <div>
                    <span>FullName</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input />
                </div>
                <div>
                    <Button type="primary" style={{ marginTop: '10px' }}>Create user</Button>
                </div>
            </div>
        </div>
    );
}
export default UserForm;
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialFormData);
  
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      email: "",
      password: "",
    };
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
  
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
  
    setErrors(newErrors);
  
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (!existingUser) {
      setErrors({
        ...newErrors,
        email: "This email is not registered",
      });
      return;
    }
    if (existingUser.password !== formData.password) {
      setErrors({
        ...newErrors,
        password: "Incorrect password",
      });
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(existingUser));
    setFormData(initialFormData);
    navigate("/");
  };

  return (
    <div className="form-cont">
      <div className="login-page form">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              id="password"
              min="8"
              max="20"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit">Log In</button>
        </form>
        <p className="notice">Don't have an account? <Link to="/signup" className="link">Sign up</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
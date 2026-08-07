import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [formData, setFormData] = useState(initialFormData);
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
  
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
  
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
  
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  
    setErrors(newErrors);
  
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      setErrors({
        ...newErrors,
        email: "This email is already registered",
      });
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setFormData(initialFormData);
    navigate("/login");
  };

  return (
    <div className="form-cont">
      <div className="signup-page form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="notice">Do you already have an account? <Link to="/login"  className="link">Log in</Link></p>
      </div>
    </div>
  )
}

export default SignupPage
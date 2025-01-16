import { Outlet } from "react-router-dom";
import { useState } from "react";

interface FormData {
  age: string;
  weight: string;
  height: string;
  username: string;
  email: string;
  password: string;
}

function Layout() {
  const [formData, setFormData] = useState<FormData>({
    age: '18 years',
    weight: '75 kg',
    height: '182 cm',
    username: 'Ares',
    email: 'default@gmail.com',
    password: 'preben the destroyer27',
  });

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    console.log("Form Data Submitted:", data);
  };

  return (
    <div>
      <main>
        <h1></h1>
        <Outlet context={{ formData, handleFormSubmit }} />
      </main>
    </div>
  );
}

export default Layout;

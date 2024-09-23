"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
function Page() {
  
  return (
    <main className="w-screen h-screen flex justify-center items-center px-4 ">
      <Tabs defaultValue="account" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            className={`text-md font-Satoshi font-bold`}
            value="account"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            className={`text-md  font-Satoshi font-bold`}
            value="Sign up"
          >
            Sign up
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <LoginTab />
        </TabsContent>
        <TabsContent value="Sign up">
          <SignupTab />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default Page;

const LoginTab = () => {
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");
  const validate = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    // Simple email validation
    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    // Simple password validation
    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = () => {
    if (validate()) {
      setLoader(true);
      axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      axios
        .post(
          `https://admin.yatriclubs.com/api/admin/login`,
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          const token = res.data?.token;
          if (token) {
            localStorage.setItem("authToken", token); // Store token in localStorage
            setToken(token); // Update the token state or context
          }
        }).then(() => {window.location.push('/admin/dashboard')} )
        .catch((error) => {
          console.error(error);
          // Optionally set an error state here
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md lg:text-2xl font-Satoshi">
          Login
        </CardTitle>
        <CardDescription>Welcome back to MenloCloud.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="example@example.com"
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className={`w-full`}>
        <button
          onClick={handleLogin}
          className="px-4 w-full justify-center font-semibold py-1 bg-blue-500 font-Satoshi flex items-center gap-3 text-gray-100 text-md rounded-md"
        >
          {loader ? (
            <svg
              className="w-6 h-6 text-gray-300 animate-spin"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          ) : null}
          {loader ? "Logging in..." : "Login"}
        </button>
      </CardFooter>
    </Card>
  );
};
const SignupTab = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const validate = () => {
    let valid = true;
    let errors = { name: "", email: "", password: "" };

    // Name validation
    if (!name) {
      errors.name = "Name is required";
      valid = false;
    }

    // Email validation
    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSignup = () => {
    if (validate()) {
      setLoader(true);
      try {
        axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
          withCredentials: true,
        });
        axios
          .post(
            `https://admin.yatriclubs.com/api/admin/register`,
            {
              name: name,
              email: email,
              password: password,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
          })
          .finally(() => {
            setLoader(false);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md lg:text-2xl font-Satoshi">
          Sign up
        </CardTitle>
        <CardDescription>Join us</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="John"
            className={`border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="example@example.com"
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className={`w-full`}>
        <button
          onClick={handleSignup}
          className="px-4 w-full justify-center font-semibold py-1 bg-blue-500 font-Satoshi flex items-center gap-3 text-gray-100 text-md rounded-md"
        >
          {loader ? (
            <svg
              className="w-6 h-6 text-gray-300 animate-spin"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          ) : null}
          {loader ? "Signing up..." : "Sign up"}
        </button>
      </CardFooter>
    </Card>
  );
};

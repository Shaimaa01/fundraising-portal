import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
// Change this line in LoginPage.jsx
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.email({
      error: (issue) => issue.input === ""
    ? "Email is required."
    : "Please enter a valid email address.",
  
  }),
  password: z.string().min(6, {
   error: (issue) => issue.input === ""
    ? "Password is required."
    : "Password is too short.",
  }),
});

export function LoginPage() {
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setServerError("");
    setIsLoading(true);

    try {
      const internsRef = collection(db, "interns");
      const q = query(internsRef, where("email", "==", data.email));
      
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setServerError("No account found with this email. Please check and try again.");
      } else {
        const internData = querySnapshot.docs[0].data();
        const internId = querySnapshot.docs[0].id;
        
  login({ id: internId, ...internData });

  
  navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setServerError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Intern Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your portal.
        </CardDescription>
      </CardHeader>
     
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              {...form.register("email")} 
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...form.register("password")}
            />
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full mt-2" type="submit" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign in"}
          </Button>
          {serverError && <p className="text-sm text-red-500">{serverError}</p>}
        </CardFooter>
      </form>
    </Card>
  );
}
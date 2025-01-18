import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual login logic
      toast({
        title: "Success",
        description: "Welcome back!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm animate-fade-in">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary-600" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      <div className="text-center space-y-2">
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="text-sm text-gray-600 hover:text-primary transition-colors"
        >
          Forgot password?
        </button>
        <div className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-primary hover:text-primary-600 transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};
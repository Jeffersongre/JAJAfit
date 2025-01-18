import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    weight: "",
    height: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual signup logic
      toast({
        title: "Success",
        description: "Account created successfully!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
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
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full"
        />
        <Input
          name="birthdate"
          type="date"
          placeholder="Birth Date"
          value={formData.birthdate}
          onChange={handleChange}
          required
          className="w-full"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={(e) => setFormData((prev) => ({ ...prev, gender: e.target.value }))}
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <Input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          required
          className="w-full"
        />
        <Input
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary-600" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Sign Up"}
      </Button>
      <div className="text-center">
        <div className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-primary hover:text-primary-600 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};
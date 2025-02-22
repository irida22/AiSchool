
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormData {
  email: string;
  password: string;
}

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would typically make an API call to your auth service
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      toast({
        title: "Success",
        description: isLogin ? "Logged in successfully." : "Account created successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm p-6">
      <h1 className="text-2xl font-normal text-center mb-8">
        {isLogin ? "Login" : "Create Account"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:border-gray-300 transition-colors bg-white"
        />

        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          className="w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:border-gray-300 transition-colors bg-white"
        />

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => {}}
            className="text-sm text-gray-600 hover:underline"
          >
            Forgot password
          </button>

          <Button
            type="submit"
            variant="default"
            disabled={loading}
            className="bg-black text-white hover:bg-gray-800 rounded-none px-6"
          >
            {loading ? "Loading..." : (isLogin ? "Sign in" : "Create account")}
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-gray-600 hover:underline"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;

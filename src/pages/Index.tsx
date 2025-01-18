import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to FitGuide</h1>
          <p className="text-gray-600 mb-8">Your personal fitness and nutrition assistant</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workout Recognition</h3>
              <p className="text-gray-600 mb-4">Take a photo of gym equipment to get instant guidance</p>
              <Button className="w-full bg-primary hover:bg-primary-600">Coming Soon</Button>
            </div>
            
            <div className="bg-primary-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Meal Planning</h3>
              <p className="text-gray-600 mb-4">Get personalized meal suggestions based on your goals</p>
              <Button className="w-full bg-primary hover:bg-primary-600">Coming Soon</Button>
            </div>
            
            <div className="bg-primary-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">Monitor your fitness journey with detailed analytics</p>
              <Button className="w-full bg-primary hover:bg-primary-600">Coming Soon</Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="text-primary hover:text-primary-600"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
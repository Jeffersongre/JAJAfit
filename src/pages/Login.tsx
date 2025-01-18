import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Bem-vindo de volta</h1>
          <p className="mt-3 text-lg text-gray-600">Sua jornada fitness continua aqui</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
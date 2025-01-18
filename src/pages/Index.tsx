import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Camera, Dumbbell, Apple, Brain } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8 animate-fade-in">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Bem-vindo ao FitGuide</h1>
            <p className="text-muted-foreground text-lg">
              Seu assistente pessoal de fitness e nutrição
            </p>
          </div>

          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Seu Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Meta Diária de Água</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Treinos Esta Semana</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Camera className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Reconhecimento de Equipamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tire uma foto do equipamento para receber instruções
                </p>
                <Button className="w-full">Em Breve</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Apple className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Plano Alimentar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Receba sugestões personalizadas de refeições
                </p>
                <Button className="w-full">Em Breve</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Dumbbell className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Treinos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Acompanhe seus exercícios e evolução
                </p>
                <Button className="w-full">Em Breve</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Dicas e Educação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Aprenda sobre fitness e nutrição
                </p>
                <Button className="w-full">Em Breve</Button>
              </CardContent>
            </Card>
          </div>

          {/* Sign Out Button */}
          <div className="text-center pt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="text-primary hover:text-primary-600"
            >
              Sair
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
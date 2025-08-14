import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Users, 
  Brain, 
  TrendingUp,
  Plus,
  Settings
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Dashboard WhatsApp Bot
            </h1>
            <p className="text-muted-foreground">
              Gerencie seu bot de WhatsApp com IA de forma inteligente
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="default" className="bg-success text-success-foreground">
              Bot Online
            </Badge>
            <Button variant="hero" className="shadow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Nova Regra
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Mensagens Hoje"
          value="1,247"
          change="+12% desde ontem"
          changeType="positive"
          icon={MessageSquare}
        />
        <StatsCard
          title="Usuários Únicos"
          value="324"
          change="+8% desde ontem"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Respostas IA"
          value="892"
          change="+25% desde ontem"
          changeType="positive"
          icon={Brain}
        />
        <StatsCard
          title="Taxa de Sucesso"
          value="98.5%"
          change="+0.3% desde ontem"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Brain className="w-4 h-4 mr-2" />
              Criar Regra
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-2" />
              Configurar WhatsApp
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Desempenho nas Últimas 24h</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Gráfico de performance será implementado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;

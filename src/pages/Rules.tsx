import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus,
  Brain,
  MoreHorizontal,
  Search,
  Filter,
  Play,
  Pause
} from "lucide-react";
import { Input } from "@/components/ui/input";

const rules = [
  {
    id: 1,
    name: "Saudação",
    pattern: "oi|olá|bom dia",
    matchType: "REGEX",
    action: "REPLY_TEXT",
    response: "Olá! Como posso ajudar você hoje?",
    priority: 1,
    active: true,
    triggers: 45
  },
  {
    id: 2,
    name: "Orçamento",
    pattern: "orçamento|preço|valor",
    matchType: "CONTAINS",
    action: "REPLY_TEXT", 
    response: "Vou te ajudar com o orçamento! Qual produto te interessa?",
    priority: 2,
    active: true,
    triggers: 23
  },
  {
    id: 3,
    name: "Horário de Funcionamento",
    pattern: "horário|funciona|aberto",
    matchType: "CONTAINS",
    action: "REPLY_TEXT",
    response: "Funcionamos de Segunda a Sexta, das 8h às 18h!",
    priority: 3,
    active: false,
    triggers: 12
  }
];

const Rules = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Regras do Bot
            </h1>
            <p className="text-muted-foreground">
              Configure como seu bot responde a diferentes tipos de mensagens
            </p>
          </div>
          <Button variant="hero" className="shadow-primary">
            <Plus className="w-4 h-4 mr-2" />
            Nova Regra
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar regras..."
                className="max-w-md pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Rules List */}
      <div className="space-y-4">
        {rules.map((rule) => (
          <Card key={rule.id} className="hover:shadow-md smooth-transition">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{rule.name}</h3>
                    <Badge variant={rule.active ? "default" : "secondary"}>
                      {rule.active ? "Ativa" : "Inativa"}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Prioridade {rule.priority}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Padrão</p>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        {rule.pattern}
                      </code>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tipo</p>
                      <Badge variant="outline">{rule.matchType}</Badge>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Resposta</p>
                    <p className="text-sm text-foreground bg-muted/50 p-3 rounded">
                      {rule.response}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{rule.triggers} ativações hoje</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={rule.active ? "text-warning" : "text-success"}
                  >
                    {rule.active ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (if no rules) */}
      {rules.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhuma regra configurada
              </h3>
              <p className="text-muted-foreground mb-6">
                Crie sua primeira regra para automatizar respostas do bot
              </p>
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                Criar Primeira Regra
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </DashboardLayout>
  );
};

export default Rules;
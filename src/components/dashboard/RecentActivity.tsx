import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Brain, AlertCircle, CheckCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "message",
    content: "Nova mensagem de +55 11 99999-9999",
    time: "2 min atrás",
    status: "success",
    icon: MessageSquare
  },
  {
    id: 2,
    type: "ai",
    content: "IA respondeu automaticamente",
    time: "5 min atrás",
    status: "success",
    icon: Brain
  },
  {
    id: 3,
    type: "rule",
    content: "Regra 'Orçamento' ativada",
    time: "10 min atrás",
    status: "warning",
    icon: AlertCircle
  },
  {
    id: 4,
    type: "message",
    content: "Mensagem enviada com sucesso",
    time: "15 min atrás",
    status: "success",
    icon: CheckCircle
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Atividade Recente</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 smooth-transition">
                <div className={`p-2 rounded-full ${
                  activity.status === 'success' ? 'bg-success/10' :
                  activity.status === 'warning' ? 'bg-warning/10' :
                  'bg-muted'
                }`}>
                  <activity.icon className={`h-4 w-4 ${
                    activity.status === 'success' ? 'text-success' :
                    activity.status === 'warning' ? 'text-warning' :
                    'text-muted-foreground'
                  }`} />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-foreground">{activity.content}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                    <Badge 
                      variant={activity.status === 'success' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {activity.type}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
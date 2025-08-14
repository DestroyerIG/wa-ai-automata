import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Settings, 
  BarChart3, 
  Brain, 
  HelpCircle, 
  Workflow,
  Home,
  Users,
  Shield
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Conversas", href: "/conversations", icon: MessageSquare },
  { name: "Regras", href: "/rules", icon: Brain },
  { name: "FAQs", href: "/faqs", icon: HelpCircle },
  { name: "Fluxos", href: "/flows", icon: Workflow },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Usuários", href: "/users", icon: Users },
  { name: "Configurações", href: "/settings", icon: Settings },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("pb-12 w-64 bg-sidebar border-r border-sidebar-border", className)}>
      <div className="space-y-4 py-4">
        {/* Logo */}
        <div className="px-6 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">WhatsApp Bot</h2>
              <p className="text-xs text-sidebar-foreground/60">IA Dashboard</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Navigation */}
        <div className="px-3">
          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link key={item.name} to={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={cn(
                        "w-full justify-start h-10 px-3 text-sm font-medium",
                        isActive 
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Status indicator */}
        <div className="px-6">
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-success/10 border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs text-success font-medium">Bot Ativo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
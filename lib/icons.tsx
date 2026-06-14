import {
  Heart,
  Brain,
  Sparkles,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IndicationIcon } from "@/lib/site-data";

export const INDICATION_ICONS: Record<IndicationIcon, LucideIcon> = {
  heart: Heart,
  brain: Brain,
  sparkles: Sparkles,
  shield: ShieldCheck,
  users: Users,
};

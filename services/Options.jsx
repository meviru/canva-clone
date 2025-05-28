import {
  FolderClosed,
  Home,
  LayoutDashboardIcon,
  LayoutPanelLeft,
  WalletCardsIcon,
} from "lucide-react";

export const WorkspaceMenu = [
  { name: "Home", icon: Home, path: "/workspace" },
  { name: "Projects", icon: FolderClosed, path: "/workspace/projects" },
  {
    name: "Templates",
    icon: LayoutPanelLeft,
    path: "/workspace/templates",
  },
  { name: "Billing", icon: WalletCardsIcon, path: "/workspace/billing" },
];

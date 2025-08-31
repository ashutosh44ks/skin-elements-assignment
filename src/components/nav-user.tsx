import { IconLogout } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { googleLogout } from "@react-oauth/google";
import { useProducts } from "@/hooks/useProducts";

export function NavUser() {
  const navigate = useNavigate();
  const { user, removeUserInfo } = useLoggedInUser();
  const { clearProducts } = useProducts();
  const currentUserEmail = user?.email;
  const logout = () => {
    removeUserInfo();
    googleLogout();
    clearProducts();
    navigate("/login");
  };
  const getInitials = (email: string) => {
    const parts = email.split("@")[0].split(".");
    return parts.map((part) => part.charAt(0).toUpperCase()).join("");
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          onClick={logout}
        >
          <Avatar className="h-8 w-8 rounded-lg grayscale">
            <AvatarImage
              src={user?.picture}
              alt={currentUserEmail || ""}
            />
            <AvatarFallback className="rounded-lg">
              {getInitials(currentUserEmail || "")}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">
              {user?.name}
            </span>
            <span className="text-muted-foreground truncate text-xs">
              {currentUserEmail?.split("@")[0]}
            </span>
          </div>
          <IconLogout className="ml-auto size-4" aria-label="Logout" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

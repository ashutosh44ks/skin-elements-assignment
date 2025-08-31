import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_STRUCTURE } from "@/lib/constants";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-2 justify-left bg-white px-2 rounded-sm border">
            <img
              src="logo-main.png"
              alt="Skin Elements Logo"
              className="h-12 object-contain"
            />
            <img
              src="logo-title.png"
              alt="Skin Elements Logo"
              className="h-12 object-contain"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={SIDEBAR_STRUCTURE.navMain} />
        <NavSecondary
          items={SIDEBAR_STRUCTURE.navSecondary}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

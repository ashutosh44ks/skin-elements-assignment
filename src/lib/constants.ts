import {
  IconBrandAmazon,
  IconBrandShopee,
  IconDashboard,
  IconDatabase,
  IconMessageChatbot,
  IconMoneybagHeart,
} from "@tabler/icons-react";

export const SIDEBAR_STRUCTURE = {
  navMain: [
    {
      title: "Dashboard",
      id: "dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Chatbot",
      id: "chatbot",
      url: "/chatbot",
      icon: IconMessageChatbot,
    },
    {
      title: "Profit",
      id: "profit",
      url: "/profit",
      icon: IconMoneybagHeart,
    },
    {
      title: "Amazon Integration",
      id: "amazon-integration",
      url: "/amazon-integration",
      icon: IconBrandAmazon,
    },
    {
      title: "Shopify Integration",
      id: "shopify-integration",
      url: "/shopify-integration",
      icon: IconBrandShopee,
    },
  ],
  navSecondary: [
    {
      title: "Upload Products",
      id: "upload-products",
      url: "/data-hydrator",
      icon: IconDatabase,
    },
  ],
};

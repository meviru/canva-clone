import {
  IconBookFilled,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconBrandPinterestFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconCreditCard,
  IconCreditCardFilled,
  IconFile,
  IconFileFilled,
  IconFolder,
  IconFolderFilled,
  IconHome,
  IconHomeFilled,
  IconLayout2,
  IconLayout2Filled,
  IconPresentationFilled,
} from "@tabler/icons-react";

export const WorkspaceMenu = [
  {
    name: "Home",
    icon: IconHome,
    iconFilled: IconHomeFilled,
    path: "/workspace",
  },
  {
    name: "Projects",
    icon: IconFolder,
    iconFilled: IconFolderFilled,
    path: "/workspace/projects",
  },
  {
    name: "Templates",
    icon: IconLayout2,
    iconFilled: IconLayout2Filled,
    path: "/workspace/templates",
  },
  {
    name: "Billing",
    icon: IconCreditCard,
    iconFilled: IconCreditCardFilled,
    path: "/workspace/billing",
  },
];

export const canvasSizeOptions = [
  {
    name: "Instagram Post",
    width: 500,
    height: 500,
    icon: IconBrandInstagram,
    background: "#E1306C", // Instagram pink
  },
  {
    name: "Instagram Story",
    width: 473,
    height: 700,
    icon: IconBrandInstagram,
    background: "#E1306C", // Instagram pink
  },
  {
    name: "YouTube Thumbnail",
    width: 700,
    height: 394,
    icon: IconBrandYoutubeFilled,
    background: "#FF0000", // YouTube red
  },
  {
    name: "YouTube Banner",
    width: 700,
    height: 394,
    icon: IconBrandYoutubeFilled,
    background: "#FF0000", // YouTube red
  },
  {
    name: "YouTube Post",
    width: 500,
    height: 500,
    icon: IconBrandYoutubeFilled,
    background: "#FF0000", // YouTube red
  },
  {
    name: "PowerPoint Slide",
    width: 700,
    height: 394,
    icon: IconPresentationFilled,
    background: "#B7472A", // PowerPoint orange
  },
  {
    name: "Flyer (A4)",
    width: 508,
    height: 700,
    icon: IconFileFilled,
    background: "#3E4E5E", // Neutral/dark gray for generic flyer
  },
  {
    name: "Facebook Post",
    width: 700,
    height: 368,
    icon: IconBrandFacebook,
    background: "#1877F2", // Facebook blue
  },
  {
    name: "Twitter Post",
    width: 700,
    height: 394,
    icon: IconBrandX,
    background: "#000000", // Twitter X black
  },
  {
    name: "LinkedIn Post",
    width: 700,
    height: 366,
    icon: IconBrandLinkedin,
    background: "#0A66C2", // LinkedIn blue
  },
  {
    name: "Pinterest Pin",
    width: 467,
    height: 700,
    icon: IconBrandPinterestFilled,
    background: "#E60023", // Pinterest red
  },
];

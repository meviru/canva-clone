import BackgroundSettings from "@/core/components/BackgroundSettings";
import AddImageSettings from "@/core/components/AddImageSettings";
import {
  IconBackground,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterestFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconClipboardTypography,
  IconClipboardTypographyFilled,
  IconCloud,
  IconCloudUpload,
  IconCreditCard,
  IconCreditCardFilled,
  IconFileFilled,
  IconFolder,
  IconFolderFilled,
  IconHome,
  IconHomeFilled,
  IconLayout2,
  IconLayout2Filled,
  IconPhoto,
  IconPhotoFilled,
  IconPresentationFilled,
  IconSettings,
  IconSettingsFilled,
  IconSortAscendingShapes,
  IconSortAscendingShapesFilled,
  IconSparkles,
  IconTable,
  IconTableFilled,
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
    background: "#ff339c",
  },
  {
    name: "Instagram Story",
    width: 473,
    height: 700,
    icon: IconBrandInstagram,
    background: "#ff339c",
  },
  {
    name: "YouTube Thumbnail",
    width: 700,
    height: 394,
    icon: IconBrandYoutubeFilled,
    background: "#ff3b4b",
  },
  {
    name: "YouTube Banner",
    width: 700,
    height: 394,
    icon: IconBrandYoutubeFilled,
    background: "#ff3b4b",
  },
  {
    name: "YouTube Post",
    width: 500,
    height: 500,
    icon: IconBrandYoutubeFilled,
    background: "#ff3b4b",
  },
  {
    name: "PowerPoint Slide",
    width: 700,
    height: 394,
    icon: IconPresentationFilled,
    background: "#ff6105",
  },
  {
    name: "Flyer (A4)",
    width: 508,
    height: 700,
    icon: IconFileFilled,
    background: "#0ba84a",
  },
  {
    name: "Facebook Post",
    width: 700,
    height: 368,
    icon: IconBrandFacebook,
    background: "#4a53fa",
  },
  {
    name: "Twitter Post",
    width: 700,
    height: 394,
    icon: IconBrandX,
    background: "#000000",
  },
  {
    name: "LinkedIn Post",
    width: 700,
    height: 366,
    icon: IconBrandLinkedin,
    background: "#138eff",
  },
  {
    name: "Pinterest Pin",
    width: 467,
    height: 700,
    icon: IconBrandPinterestFilled,
    background: "#E60023",
  },
];

export const sideBarMenu = [
  {
    name: "Desings",
    icon: IconTable,
    iconFilled: IconTableFilled,
    iconColor: "#13a3b5",
  },
  {
    name: "Elements",
    icon: IconSortAscendingShapes,
    iconFilled: IconSortAscendingShapesFilled,
    iconColor: "#4a53fa",
  },
  {
    name: "Text",
    icon: IconClipboardTypography,
    iconFilled: IconClipboardTypographyFilled,
    iconColor: "#992bff",
  },
  {
    name: "Uploads",
    icon: IconCloudUpload,
    iconFilled: IconCloud,
    iconColor: "#ff6105",
    component: ({ selectedMenu }) => (
      <AddImageSettings selectedMenu={selectedMenu} />
    ),
  },
  {
    name: "Photos",
    icon: IconPhoto,
    iconFilled: IconPhotoFilled,
    iconColor: "#0ba84a",
  },
  {
    name: "Background",
    icon: IconBackground,
    iconFilled: IconBackground,
    iconColor: "#ff3b4b",
    component: ({ selectedMenu }) => (
      <BackgroundSettings selectedMenu={selectedMenu} />
    ),
  },
  {
    name: "AI",
    icon: IconSparkles,
    iconFilled: IconSparkles,
    iconColor: "#ff6105",
  },
  {
    name: "Settings",
    icon: IconSettings,
    iconFilled: IconSettingsFilled,
    iconColor: "#138eff",
  },
];

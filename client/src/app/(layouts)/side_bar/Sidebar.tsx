// "use client";
// import * as React from "react";
// import { styled, useTheme, Theme, CSSObject, createTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import MailIcon from "@mui/icons-material/Mail";
// import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
// import { orange } from "@mui/material/colors";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const drawerWidth = 240;




// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   backgroundColor: '#01579b',
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));



// const links = [
//   { text: "Survey", link: "/survey", icon:(active:boolean) => <DashboardOutlinedIcon sx={{ color: active? '#01579b' : undefined }} /> },
//   { text: "Questions", link: "/questions", icon:(active:boolean) => <FilePresentOutlinedIcon sx={{ color: active? '#01579b' : undefined }} /> },
// ];


// export default function SideBar({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);
//   const pathname = usePathname();

//   const handleDrawer = () => {
//     setOpen(!open);
//   };

 

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar  >
//         <Box sx={{display: 'flex', alignItems: 'center'}}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawer}
//             edge="start"
//             sx={{
//               marginRight: 2,
//             }}
//             >
//             <MenuIcon sx={{width: '1em', height: '1em'}} />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//           Survey Management
//           </Typography>
//             </Box>

//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open} PaperProps={{sx: {border: 'none'}}} >
//         <DrawerHeader />
//         <Divider />
//         <List>
//           {links.map((items) => (
//             <ListItem key={items.text} disablePadding sx={{ display: "block" }}>
//               <Link href={items.link} style={{textDecoration: 'none'}} >

//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px:2.5,
//                   py: open ? 1 : 3,
//                   bgcolor: pathname === items.link ? '#e8f0fe' : '#ffffff'
//                 }}
//                 >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                   >
//                   {items.icon(pathname === items.link ? true : false)}
//                 </ListItemIcon>
//                 <ListItemText primary={items.text} sx={{ opacity: open ? 1 : 0 }} primaryTypographyProps={{ fontSize: '1rem', color: pathname === items.link ? "#01579B" : "#424242", fontWeight: pathname === items.link ? "600" : "400" }} />
//               </ListItemButton>
//               </Link>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#eeeeee', minHeight: `calc(100vh)` }}>
//         <DrawerHeader />
//         {children}
//       </Box>
//     </Box>
//   );
// }

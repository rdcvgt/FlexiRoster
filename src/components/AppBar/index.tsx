"use client";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { usePathname, useRouter } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { blueGrey, grey } from "@mui/material/colors";

const drawerWidth = 240;
const CMS_PAGE_LIST_MAP = [
	["cms.basic-settings", "/cms/basic-settings"],
	["cms.monthly-goal", "/cms/monthly-goal"],
	["cms.partner-info", "/cms/partner-info"],
	["cms.permission-control", "/cms/permission-control"],
];

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * Remove this when copying and pasting into your project.
	 */
	window?: () => Window;
	children: React.ReactNode;
}

export default function AppBarComponent({ window, children }: Props) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const { formatMessage } = useIntl();
	const pathname = usePathname();
	const router = useRouter();

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	const handleListItemClick = (link: string) => {
		router.push(link);
	};

	const drawer = (
		<Box>
			<Toolbar>
				<Typography variant="h6">
					{formatMessage({ id: "app-name" })}
				</Typography>
			</Toolbar>
			<List sx={{ p: 2 }}>
				{CMS_PAGE_LIST_MAP.map(([pageLangId, pageUrl]) => {
					const isSelectedItem = pathname === pageUrl;

					return (
						<ListItem key={pageLangId} disablePadding>
							<ListItemButton
								sx={{
									bgcolor: isSelectedItem ? "base.main" : "base.light",
									color: isSelectedItem ? blueGrey[700] : grey[500],
									fontWeight: 500,
									m: "auto",
									display: "block",
									mt: 2,
									fontSize: 16,
									borderRadius: "10px",
								}}
								onClick={() => handleListItemClick(pageUrl)}>
								{formatMessage({ id: pageLangId })}
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);

	// Remove this const when copying and pasting into your project.
	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				elevation={0}
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					bgcolor: "#fff",
					borderBottom: "1px solid",
					borderColor: "base.main",
				}}>
				<Toolbar>
					<IconButton
						color="primary"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
				}}
				aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: "base.light",
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: "base.light",
							borderRight: "none",
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}

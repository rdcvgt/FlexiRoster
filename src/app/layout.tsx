"use client";
import { IntlProvider } from "react-intl";
import AppBarComponent from "@/components/AppBar";
import zhLang from "@/langs/zh.json";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body>
				<IntlProvider locale="zh" defaultLocale="zh" messages={zhLang}>
					<ThemeProvider theme={theme}>
						<AppBarComponent>{children}</AppBarComponent>
					</ThemeProvider>
				</IntlProvider>
			</body>
		</html>
	);
}

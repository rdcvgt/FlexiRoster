import { createTheme } from "@mui/material";
import { blueGrey, deepOrange, grey } from "@mui/material/colors";

declare module "@mui/material/styles" {
	interface Palette {
		base: Palette["primary"];
	}

	interface PaletteOptions {
		base?: PaletteOptions["primary"];
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: blueGrey[700],
		},
		secondary: {
			main: deepOrange[500],
		},
		base: {
			main: grey[200],
			light: grey[50],
			dark: grey[300],
		},
	},

	typography: {
		fontFamily: "Roboto, sans-serif",
	},
});

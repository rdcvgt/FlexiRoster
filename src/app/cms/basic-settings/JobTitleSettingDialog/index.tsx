import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useIntl } from "react-intl";
import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

export default function JobTitleTopSection() {
	const [open, setOpen] = useState(false);

	const { formatMessage } = useIntl();

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h4">
					{formatMessage({ id: "cms.basic-settings.function-station" })}
				</Typography>
				<Button variant="contained" onClick={handleOpen}>
					{formatMessage({ id: "general.add" })}
				</Button>
			</Box>
			<Dialog fullWidth maxWidth={"sm"} open={open} onClose={handleClose}>
				<DialogTitle>
					{formatMessage({ id: "cms.basic-settings.function-station.add" })}
				</DialogTitle>
				<DialogContent>
					<Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 2 }}>
						<TextField
							label="功能站全稱"
							variant="outlined"
							required
							placeholder="Shift Lead"
						/>
						<TextField
							label="功能站常用代號"
							variant="outlined"
							required
							placeholder="sl"
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>
						{formatMessage({ id: "general.close" })}
					</Button>
					<Button>{formatMessage({ id: "general.save" })}</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

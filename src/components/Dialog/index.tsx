import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useIntl } from "react-intl";

type Props = {
	children: React.ReactNode;
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	titleId: string;
};

export default function SimpleDialog({
	children,
	size = "md",
	titleId,
}: Props) {
	const [open, setOpen] = React.useState(!!children);

	const { formatMessage } = useIntl();

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Dialog fullWidth maxWidth={size} open={open} onClose={handleClose}>
				<DialogTitle>{formatMessage({ id: titleId })}</DialogTitle>
				<DialogContent>{children}</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant="outlined">
						Close
					</Button>
					<Button>Save</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

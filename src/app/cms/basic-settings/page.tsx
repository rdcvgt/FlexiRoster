import { Box, Button, Typography } from "@mui/material";

export default function BasicSettings() {
	return (
		<>
			<Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="h4">職等</Typography>
					<Button variant="contained">新增</Button>
				</Box>
			</Box>

			{/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
			{/* <Box>
				<Typography variant="h4">工作技能</Typography>
				<Button variant="contained">新增</Button>
			</Box> */}
		</>
	);
}

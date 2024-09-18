"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomDialog from "@/components/Dialog";
import JobTitleTopSection from "./JobTitleSettingDialog";

export default function BasicSettings() {
	return (
		<>
			<JobTitleTopSection />

			{/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
			{/* <Box>
				<Typography variant="h4">工作技能</Typography>
				<Button variant="contained">新增</Button>
			</Box> */}
		</>
	);
}

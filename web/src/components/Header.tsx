import React from "react";
import {
	AppBar,
	Avatar,
	Box,
	Toolbar,
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ConnectWalletButton from "./ConnectWalletButton";
import thurmanLogo from "../images/thurman-logo.png";

const styles = {
	appBar: {
		background: "white",
		marginBottom: "1.25em"
	},
	font: {
		color: "black",
	},
	githubIcon: {
		color: "black",
		"&:hover": {
			cursor: "pointer",
		},
		width: "1.25em",
		height: "1.25em",
	},
	thurmanIcon: {
		width: "2.25em",
    height: "2.25em",
	}
}

const onClick = () => {
	window.open("https://github.com/thurmanlabs/thurman-v1", "_blank")
}

export default function Header() {
	return (
		<AppBar position="static" elevation={0} sx={styles.appBar}>
			<Toolbar variant="dense">
				<Box display="flex" flexGrow={1}>
					<Avatar src={thurmanLogo} sx={styles.thurmanIcon} />
				</Box>
				<GitHubIcon onClick={onClick} sx={styles.githubIcon} />
				<ConnectWalletButton  />
			</Toolbar>
		</AppBar>
	);
}
import React, { useState } from "react";
import {
	Box,
	Button,
	Grid,
	Modal,
	Paper
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import CloseButton from "../CloseButton";

type ConnectWalletModalProps = {
	children?: 
		| React.ReactChild 
		| React.ReactChild[];
}

const styles = {
	button: {
		backgroundColor: "#36454F",
		"&:hover": {
			backgroundColor: "#495D6A",
		},
		fontWeight: "800",
		marginLeft: "1.5em",
	},
	modal: {
		display: "flex",
		alignItems: "center", 
		justifyContent: "center",
	},
	paper: {
    position: "absolute",
    maxWidth: 325,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
    	xs: "75%", 
    	sm: "75%", 
    	md: "50%"
    },
    padding: "1em 1em 1.85em 1.85em",
	},
	typography: {
		fontWeight: "800"
	}
};

export default function ConnectWalletModal({ children }: ConnectWalletModalProps) {
	const { account } = useWeb3React();
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button
				variant="contained"
				onClick={handleOpen}
				sx={styles.button}
			>
				{account ? "Disconnect Wallet" : "Connect Wallet"}
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				sx={styles.modal}
			>
				<Box>
					<Paper elevation={1} sx={styles.paper}>
						<Grid container spacing={1}>
							<CloseButton handleClose={handleClose} />
							{children}
						</Grid>
					</Paper>
				</Box>
			</Modal>
		</>
	)
}
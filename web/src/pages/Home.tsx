import React from "react";
import {
	Box,
	Container,
	Grid,
} from "@mui/material";
import DashboardSection from "../components/DashboardSection";
import ProposalSection from "../components/ProposalSection";
import BorrowersSection from "../components/BorrowersSection";
import SupplyModalButton from "../components/SupplyModalButton";
import WithdrawModalButton from "../components/WithdrawModalButton";
import useWallet from "../hooks/useWallet";
import usdcIcon from "../images/usd-coin-usdc-logo.png"

const styles = {
  container: {
  	backgroundColor: "#F5F5F5",
  	height: "100vh",
  },
  button: {
  	backgroundColor: "black",
  	"&:hover": {
  		backgroundColor: "#525252",
  	},
  	fontWeight: "600"
  },
}

export default function Home() {
	const { account, usdcBalance, sUsdcBalance } = useWallet();

	return (
		<Container maxWidth={false} sx={styles.container}>
		<Box>
			<Grid container spacing={2}>
				<DashboardSection
					account={account}
					title="Assets"
					asset="USDC"
					avatarIcon={usdcIcon}
					balance={usdcBalance}
					button={<SupplyModalButton />}
				/>
				<DashboardSection
					account={account}
					title="Your Supplies"
					asset="sUSDC"
					avatarIcon={usdcIcon}
					balance={sUsdcBalance}
					button={<WithdrawModalButton />}
				/>
				<ProposalSection />
				<BorrowersSection />
			</Grid>
		</Box>
		</Container>
	);
}
import React from "react";
import {
	Box,
	Typography
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import ConnectWallet from "../connectWallet/ConnectWallet";
import AssetBalances from "../AssetBalances";
import useWallet from "../../hooks/useWallet";
import usdcIcon from "../../images/usd-coin-usdc-logo.png";
import ethIcon from "../../images/ethereum_icon.png";

const styles = {
	bodyText: {
		fontWeight: "bold",
		margin: "0.25em 0em 0.25em 0em",
	},
	box: {
		alignItems: "center",
		justifyContent: "center"
	}
}

type ConnectProps = {
	metamask: boolean;
	coinbaseWallet: boolean;
}

export default function Connect({ metamask, coinbaseWallet }: ConnectProps) {
	let { account } = useWeb3React();
	let { usdcBalance, ethBalance} = useWallet();
	let walletInstalled = metamask || coinbaseWallet;
	usdcBalance = !usdcBalance ? "0.00" : usdcBalance;
	ethBalance = !ethBalance ? "0.00" : ethBalance;
	let balances = 
	[
		{	
			name: "USDC",
			icon: usdcIcon,
			balance: usdcBalance
		},
		{
			name: "ETH",
			icon: ethIcon,
			balance: ethBalance
		}
	];

	return (
		<Box>
			<Typography variant="h4" sx={{fontWeight: "bolder"}}>
				Connect to a wallet
			</Typography>
			<Typography variant="body2" sx={{fontWeight: "bolder"}}>
				The first step is installing a crypto wallet browser extension and connecting to the Thurman App! Your crypto wallet is your personal gateway to transact on Thurman and other blockchain-based apps.
			</Typography>
			{!walletInstalled && (
				<Typography variant="body2">
					We don't see any installed wallet on your end. Use the button below to install a crypto wallet. Afterwards, refresh your page and try connecting again.
				</Typography>
			)}
			<ConnectWallet />
			{account && (
				<Box display="flex" sx={styles.box}>
					<AssetBalances assetBalances={balances} />
				</Box>
			)}
			<Typography variant="body2" sx={styles.bodyText}>
				You'll need both USDC and Ether (ETH) to become a voting member of our community. The next step will give you the option to purchase crypto using Coinbase!
			</Typography>
		</Box>
	);
}
import React from "react";
import {
	Button,
	Stack,
	Typography
} from "@mui/material";
import {
	ConnectionType,
	getIsMetaMaskInstalled
} from "./connections";
import Option from "./Option";
import coinbaseWalletIcon from "../../images/coinbase-wallet-icon.png";
import metamaskIcon from "../../images/metamask-icon.png";
import walletConnectIcon from "../../images/wallet-connect-icon.png";

type WalletOptionsProps = {
	activeConnectionType: ConnectionType | null;
	isConnectionActive: boolean;
	onActivate: (connectionType: ConnectionType) => void;
	onDeactivate: (connectionType: null) => void;
};

const styles = {
	typography: {
		fontWeight: "800"
	}
};

export default function WalletOptions({
	activeConnectionType,
	isConnectionActive,
	onActivate,
	onDeactivate
}: WalletOptionsProps) {
	const hasMetaMask = getIsMetaMaskInstalled();
	const isNoOptionActive = !isConnectionActive || (isConnectionActive && activeConnectionType === null);

	return (
		<Stack spacing={0}>
			<Typography 
				variant="h6"
				sx={styles.typography}
			>
				Connect to a wallet
			</Typography>
			{hasMetaMask ? (
				<Option
					name="MetaMask"
					avatarSrc={metamaskIcon}
					isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.INJECTED}
					isConnected={activeConnectionType === ConnectionType.INJECTED}
					connectionType={ConnectionType.INJECTED}
					onActivate={onActivate}
					onDeactivate={onDeactivate}
				/>
			) : (
				<Button 
					href="https://metamask.io/" 
					target="_blank" 
					variant="outlined"
				>
					Install MetaMask
				</Button>
			)}
			<Option
				name="Coinbase Wallet"
				avatarSrc={coinbaseWalletIcon}
				isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.COINBASE_WALLET}
				isConnected={activeConnectionType === ConnectionType.COINBASE_WALLET}
				connectionType={ConnectionType.COINBASE_WALLET}
				onActivate={onActivate}
				onDeactivate={onDeactivate}
			/>
			<Option
				name="WalletConnect"
				avatarSrc={walletConnectIcon}
				isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.WALLET_CONNECT}
				isConnected={activeConnectionType === ConnectionType.WALLET_CONNECT}
				connectionType={ConnectionType.WALLET_CONNECT}
				onActivate={onActivate}
				onDeactivate={onDeactivate}
			/>
		</Stack>
	);
	
}
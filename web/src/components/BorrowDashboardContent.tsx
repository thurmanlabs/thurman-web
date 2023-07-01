import React from "react";
import { 
	Box,
	Chip,
	Stack,
	Typography,
} from "@mui/material";
import SimpleDashboardContent, { ContentProps } from "./SimpleDashboardContent";
import BorrowModalButton from "./BorrowModalButton";
import useWallet from "../hooks/useWallet";
import usdcIcon from "../images/usd-coin-usdc-logo.png"

const formatDate = (date: Date): string => {
	let date_str: string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	return date_str;
}

export default function BorrowDashboardContent() {
	let { dUsdcBalance, lineOfCredit, rate } = useWallet();
	const borrowMax = !lineOfCredit?.borrowMax ? "0.0" : lineOfCredit?.borrowMax;
	dUsdcBalance = !dUsdcBalance ? "0.0" : dUsdcBalance;
	rate = !rate ? "0.0" : rate;
	const remainingBalance = parseFloat(borrowMax) - parseFloat(dUsdcBalance);
	const balance =  remainingBalance > 0 ? remainingBalance : "0.0";
	const creationTimestamp = !lineOfCredit?.creationTimestamp
		? 0 : lineOfCredit?.creationTimestamp * 1000;
	const expirationTimestamp = !lineOfCredit?.expirationTimestamp 
		? 0 : lineOfCredit?.expirationTimestamp * 1000;
	const maturityDate = new Date(expirationTimestamp);
	const creationDate = new Date(creationTimestamp);
	const borrowMaxTemplate = `Borrow Max: ${remainingBalance}`;
	const creationTemplate = `Creation Date: ${formatDate(creationDate)}`;
	const maturityTemplate = `Maturity Date: ${formatDate(maturityDate)}`;
	const rateTemplate = `APR: ${rate}`;
	
	const contentProps: ContentProps = {
		asset: "Remaining",
		avatarIcon: usdcIcon,
		balance: balance.toString(),
		button: <BorrowModalButton />
	}

	const stringTemplates: string[] = [
		borrowMaxTemplate,
		creationTemplate,
		maturityTemplate,
		rateTemplate
	]

	return (
		<>
		{parseFloat(borrowMax) > 0 ?
			<Box display="flex" justifyContent="start">
				<Stack 
					direction="row" 
					spacing={1}
					sx={{ flexWrap: "wrap", gap : 1.25 }}
				>
					<>
					{stringTemplates.map((template) => {
						return (
							<Chip label={template} variant="outlined" />
						)
					})}
					</>
				</Stack>
			</Box>
				: <Box display="flex" justifyContent="start">
						<Chip label="Reach out to us to apply to become a borrower" />
					</Box>
		}
		<SimpleDashboardContent
			asset={contentProps.asset}
			avatarIcon={contentProps.avatarIcon}
			balance={contentProps.balance}
			button={contentProps.button}
		/>
		</>
	);
}
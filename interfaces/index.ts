export interface IHeaderLinks {
	lable: string;
	subLables?: string[]
}

export interface IBoxList {
	img: string;
	text: string
}

export interface IBoxGalleryCols {
	firstImage: string;
	secondImage: string;
}

export interface IGeekCardInfo {
	img: string;
	card_text: string;
	bottom_text: string;
}

export interface IComplimentQuotes {
	id: number;
	text: string;
	user: string;
}

interface IncludedInPlan {
	status: boolean;
	title: string;
}

export interface IPlanItem {
	title: string;
	price: number;
	img: string;
	description: string;
	includedIn: IncludedInPlan[];
}
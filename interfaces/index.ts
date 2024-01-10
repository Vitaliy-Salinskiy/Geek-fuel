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

export interface IAuthor {
	_id: string;
	username: string;
	password: string;
	roles: Array<any>;
	posts: Array<any>;
	likedPosts: Array<any>;
	comments: Array<IComment>;
	messages: Array<any>;
	__v: number;
}

export interface IComment {
	approved: boolean;
	author: IAuthor;
	content: string;
	date: string;
	post: string;
	__v: number;
	_id: string;
}

export interface IPost {
	_id: string;
	image: string;
	title: string;
	content: string;
	author: IAuthor;
	likedBy: Array<any>;
	comments: Array<any>;
	__v: number;
}
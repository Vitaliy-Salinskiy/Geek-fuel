import { IHeaderLinks, IBoxList, IBoxGalleryCols } from "@/interfaces";
import li1_img from '../public/assets/images/WhatInABox/list/li1-img.svg';
import li2_img from '../public/assets/images/WhatInABox/list/li2-img.svg';
import li3_img from '../public/assets/images/WhatInABox/list/li3-img.svg';
import li4_img from '../public/assets/images/WhatInABox/list/li4-img.svg';
import col1_1 from '../public/assets/images/WhatInABox/gallery/col1_1.svg';
import col1_2 from '../public/assets/images/WhatInABox/gallery/col1_2.svg';
import col2_1 from '../public/assets/images/WhatInABox/gallery/col2_1.svg';
import col2_2 from '../public/assets/images/WhatInABox/gallery/col2_2.svg';
import col3_1 from '../public/assets/images/WhatInABox/gallery/col3_1.svg';
import col3_2 from '../public/assets/images/WhatInABox/gallery/col3_2.svg';

export const headerLinks: IHeaderLinks[] = [
	{
		lable: "TEE CLUB",
		subLables: ["bundles", "exclusive tees", "collectibles"],
	},
	{
		lable: "SHOP",
		subLables: ["bundles", "exclusive tees", "collectibles"],
	},
	{
		lable: "GHOSTBUSTERS",
	},
	{
		lable: "🎁 GIFT",
	}
]

export const boxList: IBoxList[] = [
    {
        img: li1_img,
        text: 'Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. '
    },
    {
        img: li2_img,
        text: 'Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. '
    },
    {
        img: li3_img,
        text: 'Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. '
    },
    {
        img: li4_img,
        text: 'Suspendisse velit nunc, consectetur non porttitor quis, molestie feugiat quam. '
    }
];

export const boxGalleryCols: IBoxGalleryCols[] = [
    {
        firstImage: col1_1,
        secondImage: col1_2
    },
    {
        firstImage: col2_1,
        secondImage: col2_2
    },
    {
        firstImage: col3_1,
        secondImage: col3_2
    },
];
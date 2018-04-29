export class Order {
	title: string;
	tel: string;
	address: string;
	allcost: number;
	status: string;
	cart_positions: CartPosition[];
}

class CartPosition {
	img: string;
	title: string;
	cost: number;
	count: number;
}
export type Employee = {
	employeeID: number;
	firstName: string;
	lastName: string;
}

export type Order = {
	orderID: number;
	customerID: string;
	employeeID: number;
}

export type Customer = {
	customerID: string;
	companyName: string;
	contactName: string;
	contactTitle: string;
	address: {
		phone: string;
	}
}
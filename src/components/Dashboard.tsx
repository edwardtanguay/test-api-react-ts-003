import { useEffect, useState } from "react"
import { type Order, type Employee, type Customer } from "../types";

const backendUrl = "http://localhost:3399";
const token = "abcde12345";

export const Dashboard = () => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [orders, setOrders] = useState<Order[]>([]);
	const [customers, setCustomers] = useState<Customer[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${backendUrl}/northwind/employees`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const _employees = await response.json();
			setEmployees(_employees);
		})();
	}, [])

	useEffect(() => {
		(async () => {
			const response = await fetch(`${backendUrl}/northwind/orders`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const _orders = await response.json();
			setOrders(_orders);
		})();
	}, [])

	useEffect(() => {
		(async () => {
			const response = await fetch(`${backendUrl}/northwind/customers`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const _customers = await response.json();
			setCustomers(_customers);
		})();
	}, [])

	return (
		<div className="mt-3 bg-slate-300 p-3 rounded">

			<select className="p-1 rounded">
				{employees.map(emp => {
					return (
						<option key={emp.employeeID} value={emp.employeeID}>{emp.firstName} {emp.lastName}</option>
					)
				})}
			</select>
		</div>
	)
}
import { useEffect, useState } from "react"
import type { Order, Employee } from "../types";

const backendUrl = "http://localhost:3399";
const token = "abcde12345";

export const Dashboard = () => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [orders, setOrders] = useState<Order[]>([]);

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

	return (
		<div className="mt-3 bg-slate-200 p-3 rounded">
			<p>Employees: {employees.length}</p>
			<p>Orders: {orders.length}</p>
		</div>
	)
}
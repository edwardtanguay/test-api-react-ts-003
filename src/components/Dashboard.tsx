import { useEffect, useState } from "react"
import type { Employee } from "../types";

const backendUrl = "http://localhost:3399";
const token = "abcde12345";

export const Dashboard = () => {
	const [employees, setEmployees] = useState<Employee[]>([]);

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

	return (
		<div className="mt-3 bg-slate-200 p-3 rounded">
			<p>Employees: {employees.length}</p>
		</div>
	)
}
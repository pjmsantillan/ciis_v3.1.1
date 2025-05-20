import AppLayout from "@/layouts/app-layout";
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import { Head } from "@inertiajs/react";
import DataTable from "./data-table";
import { columns } from "./columns";

const breadcrumbs = [
    {
        title: 'User Management',
        href: '/user-management',
    },
];

export default function UserManagement({ users }) {
    const data = users;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management" />
            <DataTable columns={columns} data={data} />
        </AppLayout>
    )
}
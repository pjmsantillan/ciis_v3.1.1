import AppLayout from "@/layouts/app-layout";
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import { Head } from "@inertiajs/react";

const breadcrumbs = [
    {
        title: 'Role Management',
        href: '/role-management',
    },
];
export default function RoleManagement() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Role Management" />
            <div className="flex flex-col flex-1 h-full gap-4 p-4 rounded-xl">
                <div className="grid gap-4 auto-rows-min md:grid-cols-3">
                    <div className="relative overflow-hidden border border-sidebar-border/70 dark:border-sidebar-border aspect-video rounded-xl">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative overflow-hidden border border-sidebar-border/70 dark:border-sidebar-border aspect-video rounded-xl">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative overflow-hidden border border-sidebar-border/70 dark:border-sidebar-border aspect-video rounded-xl">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    )
}
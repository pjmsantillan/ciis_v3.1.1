"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Form } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { router, useForm } from "@inertiajs/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import * as React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export const columns = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <div className="flex items-center space-x-2">
                    <span>Name</span>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className="text-sm text-gray-500 hover:text-gray-700"
                    >
                        {column.getIsSorted() === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    </button>
                </div>
            );
        },
        cell: ({ row }) => {
            const { name } = row.original;
            const { email } = row.original;

            return (
                <div className="flex flex-col">
                    <div>{name}</div>
                    <div className="text-sm text-muted-foreground">{email}</div>
                </div>
            );
        },
    },
    {
        accessorKey: 'role',
        header: ({ column }) => {
            return (
                <div className="flex items-center space-x-2">
                    <span>Role</span>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className="text-sm text-gray-500 hover:text-gray-700"
                    >
                        {column.getIsSorted() === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    </button>
                </div>
            );
        },
        cell: ({ row }) => {
            const { role } = row.original;

            return (
                <Badge variant="outline">{role}</Badge>
            );
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => {
            return (
                <div className="flex items-center space-x-2">
                    <span>Status</span>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className="text-sm text-gray-500 hover:text-gray-700"
                    >
                        {column.getIsSorted() === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    </button>
                </div>
            );
        },
        cell: ({ row }) => {
            const { status, id } = row.original;
            const [isOpen, setIsOpen] = React.useState(false);

            const ReactSwal = withReactContent(Swal);

            const { data, setData, put, processing, errors } = useForm({
                status: status,
            });

            const handleStatusChange = (value) => {
                setData('status', value);
                setIsOpen(true);
            }

            const confirmStatusChange = (e) => {
                e.preventDefault();
                put(route('user-management.updateStatus', id), {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: (response) => {
                        setIsOpen(false);
                        ReactSwal.fire({
                            title: 'Success',
                            text: response.props.flash.success,
                            icon: 'success',
                            confirmButtonText: 'OK',
                        });
                    },
                    onError: () => {
                        setIsOpen(false);
                        ReactSwal.fire({
                            title: 'Error',
                            text: 'Failed to change user status',
                            icon: 'error',
                            confirmButtonText: 'OK',
                        });
                    },
                    onFinish: () => {
                        setIsOpen(false);
                    },
                });
            }

            const cancelStatusChange = () => {
                setData('status', status);
                setIsOpen(false);
            }

            return (
                <>
                    <Select value={data.status} onValueChange={handleStatusChange}>
                        <SelectTrigger className="h-8 capitalize text-xs">
                            <SelectValue placeholder={data.status} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>

                    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Confirm Status Change</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Are you sure you want to change the status of <strong>{row.original.name}</strong> to {data.status} ?
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={cancelStatusChange}>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={confirmStatusChange}>Confirm</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </>
            )

        },
    },
    {
        accessorKey: 'updated_at',
        header: ({ column }) => {
            return (
                <div className="flex items-center space-x-2">
                    <span>Updated At</span>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className="text-sm text-gray-500 hover:text-gray-700"
                    >
                        {column.getIsSorted() === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    </button>
                </div>
            );
        },
    },
    {
        accessorKey: 'created_at',
        header: ({ column }) => {
            return (
                <div className="flex items-center space-x-2">
                    <span>Created At</span>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className="text-sm text-gray-500 hover:text-gray-700"
                    >
                        {column.getIsSorted() === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    </button>
                </div>
            );
        },
    },
    // Actions
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            return (
                <div className="flex items-center space-x-2">
                    <button className="text-sm text-blue-500 hover:text-blue-700">Edit</button>
                    <button className="text-sm text-red-500 hover:text-red-700">Delete</button>
                </div>
            );
        },
    },
]

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Delete } from "lucide-react";

export default function DeleteUserDialog() {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="flex items-center gap-2 cursor-pointer py-1 px-2 rounded-md hover:bg-red-100 hover:text-red-600">
                    <Delete className="h-4 w-4" />
                    <span className="text-sm">Delete</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> Delete User </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

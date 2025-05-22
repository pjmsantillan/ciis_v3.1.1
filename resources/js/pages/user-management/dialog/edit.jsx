import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";

export default function EditUserDialog() {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="flex items-center gap-2 cursor-pointer py-1 px-2 rounded-md hover:bg-green-100 hover:text-green-600">
                    <Pencil className="h-4 w-4" />
                    <span className="text-sm">Edit</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> Edit User </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

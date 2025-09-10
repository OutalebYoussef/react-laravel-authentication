import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input"; // keep shadcn's original Input
import { cn } from "@/lib/utils"; // if you use the cn helper from shadcn

export function PasswordInput({ className, ...props }) {
    const [show, setShow] = useState(false);

    return (
        <div className="relative w-full">
            <Input
                type={show ? "text" : "password"}
                className={cn("pr-10", className)}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
                aria-label={show ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-muted/50"
            >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
        </div>
    );
}

'use client'
import Button from '@/components/ui/Button';
import Input from "@/components/ui/Input";
import { Alert } from "@/components/ui/alert-ui";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { useActionState } from "react";
import { signin } from "@/services/auth";

export default function SignInForm() {
    const [state, action, pending] = useActionState(signin, null);

    return (
        <div className="mt-20 ">
            <Alert errors={state?.errors} />
            <form action={action}>
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <Image
                            src="/aria-logo.png"
                            width={100}
                            height={100}
                            alt="logo"
                        />
                        <div className="flex items-center mt-5 gap-x-2">
                            <h1 className="block">Welcome Back</h1>
                        </div>
                    </div>
                    <Input
                        name="phone"
                        placeholder="Phone"
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        isPassword
                    />
                    <Button disabled={pending} buttonClass="flex gap-x-2 mt-2">
                        <ClipLoader
                            loading={pending}
                            color="#ffffff"
                            size={15}
                        />
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}




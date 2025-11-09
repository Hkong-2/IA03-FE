import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useState } from "react"

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormData = z.infer<typeof schema>

export default function LoginForm() {
    const form = useForm<FormData>({ resolver: zodResolver(schema) })
    const [message, setMessage] = useState("")

    const onSubmit = async (data: FormData) => {
        // 💡 phần này là giả lập đăng nhập
        // nếu cần kết nối API thật, sẽ thêm axios call ở đây
        if (data.email === "test@example.com" && data.password === "123456") {
            setMessage("✅ Login successful!")
        } else {
            setMessage("❌ Invalid credentials")
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 w-full max-w-sm mx-auto"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="you@example.com" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="••••••" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">
                    Login
                </Button>

                {message && (
                    <p
                        className={`text-center text-sm ${message.includes("✅") ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </Form>
    )
}

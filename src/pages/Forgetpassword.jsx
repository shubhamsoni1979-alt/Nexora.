import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Forgetpassword() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Forget Password</CardTitle>
                <CardDescription>
                    Enter your email to reset your password
                </CardDescription>
                <CardAction>
                    <Link to="/login">
                        <Button variant="link">Back</Button>
                    </Link>
                </CardAction>
            </CardHeader>
            <form onSubmit={(e) => e.preventDefault()}>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        {/* Email */}
                        <div className="gap-6">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2 mt-2">
                    <Button type="submit" className="w-full">
                        Get OTP
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Forgetpassword
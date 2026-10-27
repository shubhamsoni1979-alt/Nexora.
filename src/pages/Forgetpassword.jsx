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

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

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
                    <div className="flex flex-col gap-5">
                        {/* Email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email to reset your password"
                                required
                            />
                        </div>

                        {/* OTP */}
                        <div className="grid gap-2.5">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="otp">Enter OTP</Label>
                                <span className="text-xs text-muted-foreground">6-digit code</span>
                            </div>
                            <div className="flex justify-center py-2">
                                <InputOTP maxLength={6} id="otp" containerClassName="justify-center">
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} className="size-10 text-base" />
                                        <InputOTPSlot index={1} className="size-10 text-base" />
                                        <InputOTPSlot index={2} className="size-10 text-base" />
                                    </InputOTPGroup>
                                    <InputOTPSeparator className="mx-1 sm:mx-2" />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} className="size-10 text-base" />
                                        <InputOTPSlot index={4} className="size-10 text-base" />
                                        <InputOTPSlot index={5} className="size-10 text-base" />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex-col gap-2 mt-4">
                    <Button type="submit" className="w-full">
                        Get OTP
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Forgetpassword
import {
    putOTP,
    putOTPGroup,
    putOTPSeparator,
    putOTPSlot,
} from "@/components/ui/input-otp"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
function Otp() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>OTP Verification</CardTitle>
                <CardDescription>
                    Enter the 6-digit code sent to{" "}
                    <span className="font-semibold text-foreground break-all">{email}</span>
                </CardDescription>
                <CardAction>
                    <Link to="/forgetpassword">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Change
                        </Button>
                    </Link>
                </CardAction>
            </CardHeader>
            <CardContent>
                <InputOTP maxLength={6} className="w-full max-w-md">
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSeparator />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full">
                    Verify OTP
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Otp
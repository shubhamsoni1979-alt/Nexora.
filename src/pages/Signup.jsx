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
function Signup() {
    return (
        <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                        <CardAction>
                            <Link to="/login">
                                <Button variant="link">Login</Button>
                            </Link>
                        </CardAction>
                    </CardHeader>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="grid gap-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input
                                            id="firstName"
                                            type="text"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input
                                            id="lastName"
                                            type="text"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="1234567890"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Age & Gender */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="grid gap-2">
                                        <Label htmlFor="age">Age</Label>
                                        <Input
                                            id="age"
                                            type="number"
                                            min="1"
                                            max="120"
                                            placeholder="25"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="gender">Gender</Label>
                                        <select
                                            id="gender"
                                            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled className="text-muted-foreground">
                                                Select gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            <option value="prefer-not-to-say">Prefer not to say</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Password & Confirm Password */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Enter Your Password"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="confirm-password">Confirm Password</Label>
                                        <Input
                                            id="confirm-password"
                                            type="password"
                                            placeholder="Confirm Your Password"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col gap-2 mt-2">
                            <Button type="submit" className="w-full">
                                Sign Up
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
    )
}

export default Signup
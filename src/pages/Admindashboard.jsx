function Admindashboard() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>
                    Welcome to your dashboard
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <p>Email: [EMAIL_ADDRESS]</p>
                    <p>Phone: 1234567890</p>
                    <p>Age: 25</p>
                    <p>Gender: Male</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    Logout
                </Button>
            </CardFooter>
        </Card>
    )
}
export default Admindashboard
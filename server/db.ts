// add a new family member
interface AddNewFamilyMember{
    body: {
        id: string; // unique
        name: string;
        profilePic: ImageBitmap;
        email: string;
        mobileNumber: string;
    }
}

interface AddAmount {
    body: {
        id: string; // unique
        amount: number;
        data: Date;
        by: string; // username
        description?: string;
    }
}

interface AddNewExpense {
    amount: string;
    date: Date;
    by: string;
    description?: string;
    category?: string;
    paymentMode: "CASH" | "ONLINE";
}

interface AddBorrowedMoney {
    from: string; //name of the person
    date: Date;
    by: string;
    description?: string;
    category?: string;
    paymentMode: "CASH" | "ONLINE";
    estimatedDateToReturn: Date;
}

interface AddLendMoney {
    to: string;
    by: string;
    date: Date;
    description?: string;
    category?: string;
    paymentMode: "CASH" | "ONLINE";
    estimatedDateToReturn: Date;
}
export class Employee {
    $key: string;
    name: string;
    email: string;
    mobile: number;
    salary: number;
    joinDate: Date;
    address: string;
    extraInfo: string;
}

export class Experience {
    $key: string;
    title: string;
    company: string;
    description: string;
    yFirst: number;
    yEnd: number;
    employeeId: string;
}

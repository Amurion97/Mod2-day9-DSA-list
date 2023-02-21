type ANode = Month | null;
class Month {
    number: number;
    salary: number;
    next: Month | null;


    constructor(number: number, salary: number) {
        this.number = number;
        this.salary = salary;
        this.next = null;
    }
}

class EmployeeSalary {
    name: string;
    start: ANode;
    end: ANode;
    total: number;

    constructor(name: string) {
        this.name = name;
        this.start = null;
        this.end = null;
        this.total = 0;
    }

    add(salary: number):void {
        let currentMonth: ANode = this.end;
        let newMonth = new Month((currentMonth)? currentMonth.number+1:1,salary);
        if (currentMonth) {
            currentMonth.next = newMonth;
        } else {
            this.start = newMonth;
        }
        this.end = newMonth;
        this.total += salary;
    }

    showAll():void {
        console.log("=".repeat(5),`${this.name}'s salary:`,"=".repeat(5))
        let currentMonth: ANode = this.start;
        while (currentMonth) {
            console.log(`Month #${currentMonth.number}: ${currentMonth.salary}`);
            currentMonth = currentMonth.next;
        }
        console.log(`=> TOTAL: ${this.total}`);
    }

    getMax(): Month {
        if (this.start) {
            let currentMonth: ANode = this.start;
            let max: ANode = currentMonth;
            while (currentMonth) {
                if (currentMonth.salary > max.salary) {
                    max = currentMonth;
                }
                currentMonth = currentMonth.next;
            }
            return max;
        } else {
            return new Month(0,0);
        }
    }
}

let giangSalary: EmployeeSalary = new EmployeeSalary("Giang");
giangSalary.add(1000);
giangSalary.add(2000);
giangSalary.add(10000);
giangSalary.add(5000);
giangSalary.showAll();
let maxMonth = giangSalary.getMax();
console.log(`The highest paid month is #${maxMonth.number} with a salary of ${maxMonth.salary}`);

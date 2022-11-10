let num : number = 0

let operations: string[] = ["add", "multiply", "divide"]
const calculator = (a: number, b: number, op: string) => {
    if (!operations.includes(op)) {
        console.log("Calculator can't resolve this!")
    }

    if (op=== "multiply") {
        return a * b;
    }
    if (op === "add") {
        return a + b;
    }
    if (op === "divide") {
        if (!(b === 0)) {
            return a/b
        }
        else {return "Calculator can't divide by 0"}
    }

}

let result = calculator(2, 4, "add")
console.log(result)


// script {
//     "calculate": "ts-node calculator.ts",
// } in package.json
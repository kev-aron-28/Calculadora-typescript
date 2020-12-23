"use strict";
class Calculator {
    constructor() {
        this.numbers = [];
    }
    addToList(value) {
        this.numbers.push(value);
        this.printScreen();
    }
    erase() {
        this.numbers = [];
        this.printScreen();
    }
    printScreen() {
        const screen = document.getElementById("screen");
        screen.value = this.numbers.join("");
    }
    print() {
        let temp;
        let next;
        let op;
        const screen = document.getElementById("screen");
        if (this.numbers.includes("+")) {
            temp = this.numbers.slice(0, this.numbers.lastIndexOf("+"));
            next = this.numbers.slice(this.numbers.lastIndexOf("+") + 1);
            op = parseInt(temp.join("")) + parseInt(next.join(""));
            screen.value = op;
            this.numbers = [];
        }
        else if (this.numbers.includes("-")) {
            temp = this.numbers.slice(0, this.numbers.lastIndexOf("-"));
            next = this.numbers.slice(this.numbers.lastIndexOf("-") + 1);
            op = parseInt(temp.join("")) - parseInt(next.join(""));
            screen.value = op;
            this.numbers = [];
        }
        else if (this.numbers.includes("x")) {
            temp = this.numbers.slice(0, this.numbers.lastIndexOf("x"));
            next = this.numbers.slice(this.numbers.lastIndexOf("x") + 1);
            op = parseInt(temp.join("")) * parseInt(next.join(""));
            screen.value = op;
            this.numbers = [];
        }
        else if (this.numbers.includes("/")) {
            temp = this.numbers.slice(0, this.numbers.lastIndexOf("/"));
            next = this.numbers.slice(this.numbers.lastIndexOf("/") + 1);
            op = (parseInt(temp.join("")) / parseInt(next.join("")));
            screen.value = op;
            this.numbers = [];
        }
    }
}
const calc = new Calculator();

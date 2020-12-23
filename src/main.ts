
class Calculator{
    numbers:string[] = []; 
    

    addToList(value:string){
        this.numbers.push(value);
        this.printScreen();
    }

    erase(){
        this.numbers = [];
        this.printScreen();
    }

    printScreen(){
        const screen:any = document.getElementById("screen")
        screen.value = this.numbers.join("")
        
    }

    print(){
        let temp:string[];
        let next:string[];
        let op:number;
        const screen:any = document.getElementById("screen")
        if(this.numbers.includes("+")){
            temp = this.numbers.slice(0,this.numbers.lastIndexOf("+"));
            next = this.numbers.slice(this.numbers.lastIndexOf("+")+1);
            op = parseInt(temp.join("")) + parseInt(next.join(""))
            screen.value = op;
            this.numbers = [];
        } else if(this.numbers.includes("-")){
            temp = this.numbers.slice(0,this.numbers.lastIndexOf("-"));
            next = this.numbers.slice(this.numbers.lastIndexOf("-")+1);
            op = parseInt(temp.join("")) - parseInt(next.join(""))
            screen.value = op;
            this.numbers = [];
        } else if(this.numbers.includes("x")){
            temp = this.numbers.slice(0,this.numbers.lastIndexOf("x"));
            next = this.numbers.slice(this.numbers.lastIndexOf("x")+1);
            op = parseInt(temp.join("")) * parseInt(next.join(""))
            screen.value = op;
            this.numbers = [];
        } else if(this.numbers.includes("/")){
            temp = this.numbers.slice(0,this.numbers.lastIndexOf("/"));
            next = this.numbers.slice(this.numbers.lastIndexOf("/")+1);
            op = (parseInt(temp.join("")) / parseInt(next.join("")));
            screen.value = op;
            this.numbers = [];
        }
    }
    
}

const calc = new Calculator();

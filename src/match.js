

class Match {
    constructor(){
        this.name = ""
        this.options = ""
        this.result = ""
        this.ai = ""

    }

    setName(re){
        this.name = re
        
    }

    setChoice(choice){
        return this.options = choice
        
    }

    setAI(){
        let choose =  Math.floor(Math.random() *3)
        if (choose === 0){
           this.ai = "Rock"
        }
        else if (choose === 1){
            this.ai = "Paper"
        }
        else if(choose === 2){
            this.ai = "Scissors"
        }

    }

    fight(){

        if (this.options === this.ai){
            this.result = "Draw"
        }
        else if(this.options === "Rock" && this.ai === "Paper"){
            this.result = "Looks like you don't have a very sharp rock cause you lost to paper LOool"
        }
        else if(this.options === "Rock" && this.ai === "Scissors"){
            this.result = "Fair play, my scissors were fake anyways lemme just pop into poundland so I can get some new ones for when you reset node"
        }
        else if(this.options === "Paper" && this.ai === "Scissors"){
            this.result = "Snip snip snip bye-bye"
        }
        else if(this.options === "Paper" && this.ai=== "Rock"){
            this.result = "???how does paper beat rock???"
        }
        else if(this.options === "Scissors" && this.ai === "Rock"){
            this.result = "Why would you try to break a rock with some scissors??"
        }
        else if(this.options === "Scissors" && this.ai === "Paper"){
            this.result = "My origami scissors are no match for your real ones:("
        }
    
    }
    
}

module.exports = Match;
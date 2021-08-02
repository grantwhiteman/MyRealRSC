describe("The Title screen", function(){
    it("puts the name into the submit bar to create a player", function(){
        cy.visit('/')
        cy.get("#inputplayer1").type("Regin")
        cy.get("#submitName1").click()
        cy.get("#submitName1").should("contain","Regin")
    })
})
describe("Match page", function(){
    it("chooses the option you want and tells you the result", function(){
        cy.visit('/')
        cy.get("#Rock").click()
        
    })
    
})
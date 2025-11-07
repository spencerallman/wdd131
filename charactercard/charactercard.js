const character = {
    name: "Bogmaw",
    class: "Ancient Nature Spirit",
    level: 5,
    health: 100,
    image: "bogmaw.png",

    attacked: function (){
        this.health = this.health - 20
        document.querySelector("#health").textContent = "Health: " + this.health;
        if (this.health <= 0){
            displayError("Character Died.")
            this.health = this.health + 20
        }
    },

    levelUp: function (){
        this.level = this.level + 1
        document.querySelector("#level").textContent = "Level: " + this.level;

    }
}

function displayError(msg) {
	document.querySelector('.errors').textContent = msg
}

document.querySelector(".name").textContent = character.name;
document.querySelector("#class").textContent = "Class: " + character.class;
document.querySelector("#level").textContent = "Level: " + character.level;
document.querySelector("#health").textContent = "Health: " + character.health;
document.querySelector(".image").setAttribute("src", character.image);
document.querySelector(".image").setAttribute("alt", "Image of Bogmaw");

document.querySelector("#attack").addEventListener("click", () => character.attacked())
document.querySelector("#levelUp").addEventListener("click", () => character.levelUp())
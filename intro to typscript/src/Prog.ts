import EvilGuy from "./models/game/evilGuy";
import SuperHero from "./models/game/superHero";

export function Main() {
  const superHero = new SuperHero("SpiderMan", 100, "Web Shot", 10);
  const vilon = new EvilGuy("Venom", 100);
  while (vilon.power > 0 && superHero.power > 0) {
    let userInput = prompt(
      "Please select an action: 1. Print All, 2. Evil attack,3. Hero attack, 4. Rest"
    );
    switch (userInput) {
      case "1":
        superHero.rePlenish();
        vilon.rePlenish();
        superHero.Print();
        vilon.Print();
        break; //Print All
      case "2":
        vilon.attacking();
        alert("evil is attacking");
        break; //Evil attack
      case "3":
        if (vilon.getIsAttacking() == true) superHero.save();
        alert("hero is saving");
        let atck = prompt(
          "Choose an attack from 1-3" +
            superHero.attacks[0] +
            "," +
            superHero.attacks[1] +
            "," +
            superHero.attacks[2]
        );
        switch (atck) {
          case "1":
            alert(
              `${superHero.getName()}'s power is: ${(superHero.power -=
                vilon.power)}`
            );
            alert(
              `${vilon.getName()}'s power is: ${(vilon.power=
                vilon.power-superHero.attacksVal[0])}`
            );
            break;
          case "2":
            alert(
              `${superHero.getName()}'s power is: ${(superHero.power =
                superHero.power - vilon.power)}`
            );
            alert(
              `${vilon.getName()}'s power is: ${(vilon.power =vilon.power-
                superHero.attacksVal[1])}`
            );
            break;
          case "3":
            alert(
              `${superHero.getName()}'s power is: ${(superHero.power =superHero.power -
                vilon.power)}`
            );
            alert(
              `${vilon.getName()}'s power is: ${(vilon.power =
                vilon.power -superHero.attacksVal[2])}`
            );
            break;
          default:
            alert("Invalid input");
        }
        break; //Hero attack
      //Hero attack
      case "4":
        superHero.rePlenish();
        vilon.rePlenish();
        break; //Rest
      default:
        alert("Invalid input");
        break;
    }
  }
  if (vilon.power == 0) {
    alert("You Saved The Day");
  } else {
    alert("You Lose, better luck next time");
  }
}

Main();

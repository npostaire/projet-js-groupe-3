import { userService } from "../service/user-service.js";
import { homeCard } from "./components/home-card.js";

console.log("in home.js");

class UserHome {
  constructor(userService) {
    this.userService = userService;
    this.$cardContainer = document.querySelector("#homeCardsContainer");
    this.users = [];
  }

  async render() {
    this.users = await this.userService.fetchAll();
    for (const user of this.users) {
      const $userCard = homeCard(user);
      this.addListenerToUserCard($userCard);
      this.addFavBtn($userCard, user);
      this.$cardContainer.appendChild($userCard);
    }
  }

  addListenerToUserCard($userCard) {
    $userCard.addEventListener("click", function () {
      console.log("redirige vers details");
    });
  }

  addFavBtn($userCard, user) {
    const $favBtn = $userCard.querySelector("button");
    if (user.isFavorite) {
      const $i = $favBtn.querySelector("i");
      $i.classList.remove("bi-heart");
      $i.classList.add("bi-heart-fill");
    }

    $favBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      (async () => {
        const u = await this.userService.toggleFavoriteById(user.id);
        console.log("fav!");
        console.log(u);
        const $i = $favBtn.querySelector("i");
        toggleFavoriteIcon($i, u.isFavorite);
      })();
    });
  }
}

function toggleFavoriteIcon($i, isFavorite) {
  if (isFavorite) {
    $i.classList.remove("bi-heart");
    $i.classList.add("bi-heart-fill");
  } else {
    $i.classList.remove("bi-heart-fill");
    $i.classList.add("bi-heart");
  }
}
const userHome = new UserHome(userService);
userHome.render();

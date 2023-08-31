
import { userService } from "../service/user-service.js";
import { DetailsCard } from "./components/details-card.js";
import { getParam } from "../../utils/get-param.js";

const id = parseInt(getParam("id"));   

console.log("in details.js");

class UserDetails {
  constructor(userService) {
    this.userService = userService;
    this.$detailContainer = document.querySelector("#detailContainer");
    this.users = [];
  }

  async render() {
    const user = await this.userService.fetchById(id);
    console.log(user)
    console.log(this.$detailContainer)
    this.$detailContainer.innerHTML=DetailsCard(user)
    console.log(DetailsCard(user))

  }
}

const userDetails = new UserDetails(userService);
userDetails.render();

export function homeCard(user) {
    const { id, name, email } = user;
    const imageLink = `https://robohash.org/${id}?set=set4`;
  
    const card = `
        <div
          class="card text-center d-flex align-items-center bg-light rounded m-3"
        >
          <button
            class="btn btn-link btn-heart rounded"
            title="Ajouter aux favoris"
          >
            <i class="bi bi-heart text-dark"></i>
          </button>
          <img
            src="${imageLink}"
            class="card-img-top w-50"
            alt="Image de profil"
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${email}</p>
          </div>
        </div>
    `;
  
    const $userCard = document.createElement("div");
    $userCard.classList.add("col");
    $userCard.innerHTML = card;
    return $userCard;
  }
  
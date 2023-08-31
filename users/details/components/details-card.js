export function DetailsCard(user) {
  const {
    id,
    name,
    email,
    phone,
    address: { street, suite, city },
    company: { name: companyName },
  } = user;

  const card = `
  <div class="user-card">
  <a href="#" class="card-link">
    <div class="card-circle">
      <img src="https://robohash.org/${user.id}?set=set4" alt="User Image" class="img-fluid">
    </div>
  </a>
  <h1 class="mt-3">${user.name}</h1>
  <p class="mt-3">Email: <a href="mailto:${user.email}">${user.email}</a></p>
  <p>Phone: <a href="tel:${user.phone}">${user.phone}</a></p>
  <div class="more-details">
    <p class="mb-0">More Details:</p>
    <p class="mb-0">Address:</p>
    <p class="mb-0 left-margin">Street: ${user.address.street}</p>
    <p class="mb-0 left-margin">Suite: ${user.address.suite}</p>
    <p class="mb-2 left-margin">City: ${user.address.city}</p>
    <p>Company:</p>
    <p class="mb-0 left-margin">Name: ${user.company.name}</p>
  </div>
</div>
  `;

return card
}


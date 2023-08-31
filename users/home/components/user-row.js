export function UserRow(user) {
  return `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        <td><a href="/users/details/details.html?id=${user.id}">Voir</a></td>
    </tr>
    `;
}

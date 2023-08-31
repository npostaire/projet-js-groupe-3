export function DetailsCard(user) {
  const {
    name,
    email,
    phone,
    company: { name: companyName },
  } = user;
  return `
    <h1>${name}</h1>
    <h2><a href="mailto:${email}">${email}</a></h2>
    <p><b>Company : </b>${companyName}</p>
    <p>Phone : <a href="tel:${phone}">${phone}</a></p>
`;
}

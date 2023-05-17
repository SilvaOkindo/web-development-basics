let company = {
  name: "silcom",
  activity: ["software solution", "security solution", "hardware repairing"],
  address: {
    street: "kisii",
    number: "123",
    location: "Kisii",
  },
};

console.log(`company name: ${company.name}`);

console.log(`company location: ${company.address.location}`);

console.log(`company number: ${company["address"]["number"]}`);

console.log(`company activities: ${company["activity"]}`);
console.log(`company last activity: ${company["activity"][2]}`);

let company1 = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: [
    {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida",
    },
    {
      street: "1st West avenue",
      number: "5",
      zipcode: "75001",
      city: "Addison",
      state: "Texas",
    },
  ],
  yearOfEstablishment: 2021,
};

console.log(`companys first address: ${company1.address[0].street}`)



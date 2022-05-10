const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8000;

class User {
    constructor(password, email, phoneNumber, lastName, firstName, _id){
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.lastName = lastName;
        this.firstName = firstName;
        this._id = _id;
    }
}

class Company {
    constructor(_id, name, address){
        this._id = _id;
        this.name = name;
        this.address = address;
    }
}

// req is short for request
// res is short for response
app.get('/api/users/new', (req, res) => {

    const newUser = new User(
        password = faker.internet.password(20,true),
        email = faker.internet.email(),
        phoneNumber = faker.phone.phoneNumber(),
        lastName = faker.name.lastName(),
        firstName = faker.name.firstName(),
        _id = faker.random.numeric(10)
    )

    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {

    const newCompany = new Company(
        _id = faker.random.numeric(10),
        name = faker.company.companyName(),
        address = {
            "street": faker.address.streetAddress(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    )

    res.json(newCompany);
});

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
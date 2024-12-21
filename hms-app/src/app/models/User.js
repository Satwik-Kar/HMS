class User {

    constructor(
        name=null,
        email,
        password,
        role,
        phoneNumber=null,
        address=null
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role; // patient, doctor, admin
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    static createBasic(email, password, role) {
        return new User(null,email,password,role,null,null);
    }


    toJSON() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
            phoneNumber: this.phoneNumber,
            address: this.address
        };
    }


    fromFirestore(data) {
        return new User(data);
    }
}

export default User;

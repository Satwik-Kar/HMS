class User {

    constructor(
        id=null,
        name=null,
        email,
        password,
        role,
        phoneNumber=null,
        address=null,
        additionalDetails = null,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role; // patient, doctor, admin
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.additionalDetails = additionalDetails; // Role-specific details
    }

    static createBasic(email, password, role) {
        return new User(null,null,email,password,role,null,null,null);
    }


    toFirestore() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
            phoneNumber: this.phoneNumber,
            address: this.address,
            additionalDetails: this.additionalDetails,
        };
    }


    fromFirestore(data) {
        return new User(data);
    }
}

export default User;

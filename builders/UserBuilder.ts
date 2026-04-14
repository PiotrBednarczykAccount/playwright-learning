export interface User {
    name: string;
    email: string;
    age: number;
}


export class UserBuilder {
    
    private name: string = 'Default User';
    private email: string = 'default@test.com';
    private age: number = 25;

    withName(name: string): UserBuilder {
        this.name = name;
        return this;
    }

    withEmail(email: string): UserBuilder {
        this.email = email;
        return this;
    }

    withAge(age: number): UserBuilder {
        this.age = age;
        return this;
    }

    build(): User {
        return {
            name: this.name,
            email: this.email,
            age: this.age
        };
    }
}
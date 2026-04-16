import { UserBuilder, User } from "../builders/UserBuilder";

export class UserFactory {

    // Static method - no need to create UserFactory object, call directly: UserFactory.createAdmin()
    // Returns a User object with predefined admin data
    static createAdmin(): User {
        // Use UserBuilder to construct the User object step by step
        return new UserBuilder()
            .withName('Admin User')
            .withEmail('admin@test.com')
            .withAge(35)
            .build(); // build() returns the final User object { name, email, age }
    }

    static createGuest(): User {
        // Use UserBuilder to construct the User object step by step
        return new UserBuilder()
            .withName('Guest User')
            .withEmail('guest@test.com')
            .withAge(31)
            .build(); // build() returns the final User object { name, email, age }
    }

    static createPremium(): User {
        // Use UserBuilder to construct the User object step by step
        return new UserBuilder()
            .withName('Premium User')
            .withEmail('premium@test.com')
            .withAge(33)
            .build(); // build() returns the final User object { name, email, age }
    }

}
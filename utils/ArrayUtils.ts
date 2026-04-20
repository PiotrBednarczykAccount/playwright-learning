import { User } from '../builders/UserBuilder';
// Returns the first element of an array of any type
export function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// Updates a user object with partial data - only provided fields are changed
export function updateUser (user: User, changes: Partial<User>): User {
    return {...user, ...changes};
}

export function getPublicProfile(user: User): Pick<User, 'name' | 'email'> {
    return {name: user.name, email: user.email}
}

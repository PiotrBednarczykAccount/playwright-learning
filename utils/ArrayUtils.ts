import { User } from '../builders/UserBuilder';
// Returns the first element of an array of any type
export function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// Updates a user object with partial data - only provided fields are changed
export function updateUser(user: User, changes: Partial<User>): User {
    return { ...user, ...changes };
}

// Returns only public fields of a user - excludes sensitive or private data
export function getPublicProfile(user: User): Pick<User, 'name' | 'email'> {
    return { name: user.name, email: user.email }
}

// Returns a readonly version of a user - fields cannot be modified after creation
export function freezeUser(user: User): Readonly<User> {
    return Object.freeze(user);
}
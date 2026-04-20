import { test, expect } from '@playwright/test'
import { freezeUser, getFirst, getPublicProfile, updateUser } from '../utils/ArrayUtils';
import { UserFactory } from '../factories/UserFactory';
import { User } from '../builders/UserBuilder';

test('Should return first string from array', async () => {
    let result: string;
    await test.step('Get first element from string array', async () => {
        result = getFirst(['apple', 'banana', 'cherry'])
    });
    await test.step('Verify first element is apple', async () => {
        expect(result).toBe('apple');
    });
});

test('Should return first number from array', async () => {
    let result: number;
    await test.step('Get first element from number array', async () => {
        result = getFirst([10, 20, 30])
    });
    await test.step('Verify first element is 10', async () => {
        expect(result).toBe(10);
    });
});

test('Should return first User object from array', async () => {
    let result: User;
    await test.step('Get first element from User array', async () => {
        result = getFirst([UserFactory.createAdmin(), UserFactory.createGuest(), UserFactory.createPremium()])
    });
    await test.step('Verify first element is admin user', async () => {
        expect(result.name).toBe('Admin User');
    });
});

test('Should update user email while keeping other fields unchanged', async () => {
    let admin = UserFactory.createAdmin();
    await test.step('Update admin user email', async () => {
        admin = updateUser(admin, { email: 'new@test.com' });
    })
    await test.step('Verify name remains unchanged', async () => {
        expect(admin.name).toBe('Admin User');
    });
    await test.step('Verify email was updated', async () => {
        expect(admin.email).toBe('new@test.com')
    });
});

test('Should return only public profile fields', async () => {
    const admin = UserFactory.createAdmin();     // wejście
    let profile: Pick<User, 'name' | 'email'>;
    await test.step('Get public profile from admin user', async () => {
        profile = getPublicProfile(admin);
    });
    await test.step('Verify public profile name', async () => {
        expect(profile.name).toBe('Admin User');
    });
    await test.step('Verify public profile email', async () => {
        expect(profile.email).toBe('admin@test.com');
    });
});

test('Should return a readonly user that cannot be modified', async () => {
    let frozen: Readonly<User>;
    await test.step('Freeze admin user', async () => {
        frozen = freezeUser(UserFactory.createAdmin());
    });
    await test.step('Verify frozen user name', async () => {
        expect(frozen.name).toBe('Admin User');
    });
});
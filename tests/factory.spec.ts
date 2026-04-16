import { test, expect } from '@playwright/test'
import { UserFactory } from '../factories/UserFactory'
import { UserBuilder, User } from '../builders/UserBuilder';

test('Should create admin user with correct data', async () => {
    let adminUser: User;
    await test.step('Create admin user', async () => {
        adminUser = UserFactory.createAdmin();
    });
    await test.step('Verify admin name', async () => {
        expect(adminUser.name).toBe('Admin User');
    });
    await test.step('Verify admin email', async () => {
        expect(adminUser.email).toBe('admin@test.com')
    });
    await test.step('Verify admin age', async () => {
        expect(adminUser.age).toBe(35)
    });
});

test('Should create guest user with correct data', async () => {
    let guestUser: User;
    await test.step('Create guest user', async () => {
        guestUser = UserFactory.createGuest();
    });
    await test.step('Verify guest name', async () => {
        expect(guestUser.name).toBe('Guest User');
    });
    await test.step('Verify guest email', async () => {
        expect(guestUser.email).toBe('guest@test.com')
    });
    await test.step('Verify guest age', async () => {
        expect(guestUser.age).toBe(31);
    });
});

test('Should create premium user with correct data', async () => {
    let premiumUser: User;
    await test.step('Create premium user', async () => {
        premiumUser = UserFactory.createPremium();
    });
    await test.step('Verify premium user name', async () => {
        expect(premiumUser.name).toBe('Premium User');
    });
    await test.step('Verify premium user email', async () => {
        expect(premiumUser.email).toBe('premium@test.com')
    });
    await test.step('Verify premium user age', async () => {
        expect(premiumUser.age).toBe(33);
    })
})

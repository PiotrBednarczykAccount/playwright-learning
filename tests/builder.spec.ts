import {test, expect} from '@playwright/test'
import { UserBuilder, User } from '../builders/UserBuilder'

test('Should build user with default values', async() => {
    let user: User; 
    await test.step('Verify default user name', async () => {
        user = new UserBuilder().build();  
    });
    await test.step('Verify user has default name', async () => {
        expect(user.name).toBe('Default User');
    });
});

test('Should build user with custom name', async () => {
    let user: User; 
    await test.step('Build user with custom name', async () => {
        user = new UserBuilder().withName('John').build();
    });
    await test.step('Verify custom name', async () => {
        expect(user.name).toBe('John');
    });
});
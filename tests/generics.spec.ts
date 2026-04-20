import { test, expect } from '@playwright/test'
import { getFirst } from '../utils/ArrayUtils';
import { UserFactory} from '../factories/UserFactory';
import { User} from '../builders/UserBuilder';

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

test('Should return first User object from array', async() => {
    let result: User;
    await test.step('Get first element from User array', async () => {
        result = getFirst([UserFactory.createAdmin(), UserFactory.createGuest(), UserFactory.createPremium()])
    });
    await test.step('Verify first element is admin user', async () => {
        expect(result.name).toBe('Admin User');
    });
}); 

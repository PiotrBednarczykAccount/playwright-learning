import {test, expect} from '@playwright/test'

test.describe('API Users', () => {
    
    let users: any[]; 
    
    test.beforeAll(async ({request}) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/users');
        users = await response.json();

    });
    
    test('Should fetch 10 users', async () => {
        await test.step('Verify number of users', async () => {
            expect(users.length).toBe(10);
        });
    });

    test('Should have valid first user', async () => {
        await test.step('Verify first user has a name', async () => {
            expect(users[0].name).toBeTruthy();
        });

        await test.step('Verify first user email is valid', async () => {
            expect(users[0].email).toContain('@');
        });
    });

    test.afterAll(async () => {
        console.log(`Fetched ${users.length} users in total`);
    });
});

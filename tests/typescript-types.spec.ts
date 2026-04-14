import {test, expect} from '@playwright/test'

interface User {
    id: number;
    name: string;
    email: string;
    username: string;
}

test('Should use typed user object', async ({request}) =>{
    let response: any;
    let user: User;
    await test.step('Send GET request', async() => {
        response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    });
    await test.step('Verify user id', async () => {
        user = await response.json();
        expect(user.id).toBe(1);
    });
    await test.step('Verify user name is not empty', async() => {
        expect(user.name).toBeTruthy();
    });
});

test('Should use typed users array', async({request}) => {
    let response: any;
    let users: User[];
    await test.step('Send GET request for users list', async() => {
        response = await request.get('https://jsonplaceholder.typicode.com/users');
    });
    await test.step('Verify users count', async () => {
        users = await response.json();
        expect(users.length).toBeGreaterThan(0);
    });
    await test.step('Verify first user email is valid', async() => {
        expect(users[0].email).toContain('@');
    });
});
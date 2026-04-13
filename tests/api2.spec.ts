import {test, expect} from '@playwright/test'

test('GET - fetch single post', async({request}) => {
    let response: any;
    await test.step('Send GET request', async () => {
        response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    });
    await test.step('Verify response status', async () => {
        expect(response.ok()).toBe(true);
    });
    await test.step('Verify response body', async () => {
        const body = await response.json();
        expect(body.id).toBe(1);
    });
});

test('POST - create new post', async({request}) => {
    let response2: any;
    await test.step('Send POST request with new post data', async () => {
        response2 = await request.post('https://jsonplaceholder.typicode.com/posts', { data: {title: 'Title', body: 'Body', userId: 1}});
    });
    await test.step('Verify response status', async () => {
        expect(response2.ok()).toBe(true);
    });
    await test.step('Verify response body contains correct title', async () => {
        const body = await response2.json();
        expect(body.title).toBe('Title');
    });
});

test('PATCH - update post title', async({request}) => {
    let repsonse3: any;
    await test.step('Send PATCH request to update post title', async() => {
        repsonse3 = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {data: {title: 'Updated Title'}});
    });
    await test.step('Verify response status', async () => {
        expect(repsonse3.ok()).toBe(true);
    });
    await test.step('Verify updated title in response body', async() => {
        const body = await repsonse3.json();
        expect(body.title).toBe('Updated Title');
    });
});

test('DELETE - remove post', async ({request}) => {
    let response4: any;
    await test.step('Send DELETE request for post', async () => {
        response4 = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    });
    await test.step('Verify response status is 200', async () => {
        expect(response4.status()).toBe(200);
    }); 
});

import {test, expect} from '@playwright/test'

test('GET - fetch single post', async({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.ok()).toBe(true);
    const body = await response.json();
    expect(body.id).toBe(1);
});

test('POST - create new post', async({request}) => {
    const response2 = await request.post('https://jsonplaceholder.typicode.com/posts', { data: {title: 'Title', body: 'Body', userId: 1}});
    expect(response2.ok()).toBe(true);
    const body = await response2.json();
    expect(body.title).toBe('Title');
});

test('PATCH - update post title', async({request}) => {
    const repsonse3 = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {data: {title: 'Updated Title'}});
    expect(repsonse3.ok()).toBe(true);
    const body = await repsonse3.json();
    expect(body.title).toBe('Updated Title');
});
test('DELETE - remove post', async ({request}) => {
 const response4 = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
 expect(response4.status()).toBe(200);
});

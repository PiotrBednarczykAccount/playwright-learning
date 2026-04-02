import { test, expect, request } from '@playwright/test';

test('GET - fetch single user', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/users/1');
  
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.name).toBeTruthy();
  
  console.log('User fetched:', body.name);
});

test('POST - create new post', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'My first API test',
      body: 'Playwright API testing is fast',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.title).toBe('My first API test');
  console.log('Post created with id:', body.id);
});

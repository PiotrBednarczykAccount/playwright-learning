import {test, expect} from '@playwright/test'

test('Should catch a JSON parse error', async ({page}) => {
    let failed = false;
    try{
        JSON.parse('invalid');
    } catch(e) {
        failed = true;
    }
    expect(failed).toBe(true);
});

test('Should always run finally block', async ({page}) => {
    let result = ''
    try{
        JSON.parse('invalid');
    }
    catch (e){   
    }
    finally {
        result = 'finally';
    }
    expect(result).toBe('finally');
});
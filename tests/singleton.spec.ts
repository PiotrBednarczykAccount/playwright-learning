import { test, expect } from '@playwright/test';
import { Config } from '../utils/Config';

test('Should always return the same instance', async () => {
    let a: Config;
    let b: Config;
    await test.step('Get two instances of Config', async () => {
        a = Config.getInstance();
        b = Config.getInstance();
    });
    await test.step('Verify both instances are identical', async () => {
        expect(a).toBe(b);
    });
});

test('Should return an instance of Config', async () => {
    let c: Config;
    await test.step('Get Config instance', async () => {
        c = Config.getInstance();
    });
    await test.step('Verify instance is of type Config', async () => {
        expect(c).toBeInstanceOf(Config);
    });
});
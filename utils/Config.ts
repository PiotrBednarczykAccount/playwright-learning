export class Config {
    private static instance: Config;  // Holds the single instance of this class - shared across the entire application

    private constructor() { } // Private constructor prevents creating instances with 'new' from outside

    static getInstance(): Config { // Returns the single shared instance, creating it only on first call
        if (!Config.instance) { // Create instance only if it doesn't exist yet
            Config.instance = new Config();
        }
        return Config.instance;
    }
}
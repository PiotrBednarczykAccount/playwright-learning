// IPage defines the contract that all page objects must follow
export interface IPage {
    navigate(url: string): Promise<void>;
}
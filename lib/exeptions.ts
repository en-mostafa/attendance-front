export default class ValidationsError {
    messages: Record<string, string[]>;

    constructor(messages: Record<string, string[]>) {
        this.messages = messages;
    }
}
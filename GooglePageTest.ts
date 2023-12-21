import { Page } from "@playwright/test";
 
class GooglePage {
    constructor ( public page: Page, public text: string){}
    async navigate() {
    await this.page.goto('https://www.google.com');
    }
    async searchFor(text : string) {
    await this.page.fill('input[name="q"]', this.text);
    await this.page.press('input[name="q"]', 'Enter');
    }
    }
    export default GooglePage;
    

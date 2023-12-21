// Example content for googleSearchTest.ts
import { test, Page, expect } from '@playwright/test';
import GooglePage from '../GooglePageTest'
 
 
 
test('Google search test', async ({ page }) => {
const googlePage = new GooglePage(page, "text");
await googlePage.navigate();
await googlePage.searchFor("IUS");
// Add assertions as needed
});

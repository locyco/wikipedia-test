import { Selector, ClientFunction } from "testcafe"

const searchBar = Selector('input[aria-label="Search Wikipedia"]');
const getURL = ClientFunction(() => window.location.href);
const testURL = "https://en.wikipedia.org/wiki/SpaceX";
const testURLFalse = "https://en.wikipedia.org/wiki/SpaceY";

fixture("Test search function")
    .page("https://en.wikipedia.org")
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    });

test('Search for SpaceX', async t => {
    await t
        .click(searchBar)
        .typeText(searchBar, "spacex")
        .pressKey('enter')
        .expect(getURL()).eql(testURL);
});

test('Search for SpaceX and fail on assertion', async t => {
    await t
        .click(searchBar)
        .typeText(searchBar, "spacex")
        .pressKey('enter')
        .expect(getURL()).eql(testURLFalse);
});

// For Allure, see instructions here:
// https://www.npmjs.com/package/testcafe-reporter-allure
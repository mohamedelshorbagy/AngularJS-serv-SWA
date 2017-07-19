import { FirstAppNgPage } from './app.po';

describe('first-app-ng App', () => {
  let page: FirstAppNgPage;

  beforeEach(() => {
    page = new FirstAppNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

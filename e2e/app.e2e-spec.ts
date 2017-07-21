import { AngularServiceApp2Page } from './app.po';

describe('angular-service-app2 App', () => {
  let page: AngularServiceApp2Page;

  beforeEach(() => {
    page = new AngularServiceApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

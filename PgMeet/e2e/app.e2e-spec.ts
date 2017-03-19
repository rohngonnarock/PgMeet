import { PgMeetPage } from './app.po';

describe('pg-meet App', () => {
  let page: PgMeetPage;

  beforeEach(() => {
    page = new PgMeetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

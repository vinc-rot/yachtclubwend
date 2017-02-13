import { YachtclubwendPage } from './app.po';

describe('yachtclubwend App', function() {
  let page: YachtclubwendPage;

  beforeEach(() => {
    page = new YachtclubwendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

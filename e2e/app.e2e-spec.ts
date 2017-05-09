import { MallorcajsPage } from './app.po';

describe('mallorcajs App', () => {
  let page: MallorcajsPage;

  beforeEach(() => {
    page = new MallorcajsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

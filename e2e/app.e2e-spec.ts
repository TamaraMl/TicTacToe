import { GameXOPage } from './app.po';

describe('game-xo App', function() {
  let page: GameXOPage;

  beforeEach(() => {
    page = new GameXOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

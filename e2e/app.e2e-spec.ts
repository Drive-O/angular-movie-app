import { AngularMovieAppPage } from './app.po';

describe('angular-movie-app App', function() {
  let page: AngularMovieAppPage;

  beforeEach(() => {
    page = new AngularMovieAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { RecipeCategoryNamePipe } from './recipe-category-name.pipe';

describe('RecipeCategoryNamePipe', () => {
  it('create an instance', () => {
    const pipe = new RecipeCategoryNamePipe();
    expect(pipe).toBeTruthy();
  });
});

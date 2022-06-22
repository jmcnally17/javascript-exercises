const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('finds Maltesers and Mars', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('finds just Mars', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('finds the S candies cheaper than a tenner', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('finds the S candies cheaper than 4 quid', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it('finds the candy regardless of uppercase or lowercase input', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});
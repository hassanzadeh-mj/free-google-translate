import { Translator } from '../Translator';

describe('Translator', () => {
  it('should create an instance', () => {
    const translator = new Translator();
    expect(translator).toBeInstanceOf(Translator);
  });
}); 
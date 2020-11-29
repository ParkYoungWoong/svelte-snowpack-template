import { expect } from 'chai';
import App from './App.svelte';

describe('<App>', () => {
  it('is first test', () => {
    expect(App.name).to.equal('App')
  });
});

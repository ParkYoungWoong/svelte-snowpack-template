// https://testing-library.com/docs/svelte-testing-library/intro
import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import Hello from './Hello.svelte';

describe('<Hello>', () => {
  it('is Hello component', () => {
    const { getByText } = render(Hello, {
      props: {
        count: 2
      }
    });
    expect(getByText(/4/).textContent).to.equal('Hello 4!');
  });
});

/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', async () => {
  let tree: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<App />);
  });

  expect(tree!.toJSON()).toBeTruthy();
  expect(JSON.stringify(tree!.toJSON())).toContain(
    'Electrical Engineer | Power Systems & Renewable Energy',
  );
});

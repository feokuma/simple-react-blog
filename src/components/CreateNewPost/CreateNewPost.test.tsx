import { render } from '@testing-library/react';
import CreateNewPost from './CreateNewPost';

test('Should render component', () => {
  const component = render(<CreateNewPost />);

  expect(component).not.toBeNull();
});

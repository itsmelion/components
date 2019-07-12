/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom';
import SuperButton from './components/SuperButton';

const root = document.getElementById('root');

const components = [
  SuperButton
]

render(
  (
    <div>
      <h1>Components</h1>

      <ul>
        {components.map(Comp => (
          <li>
            <hr />
            {Comp}
          </li>
        ))}
      </ul>
    </div>
  ), root,
);

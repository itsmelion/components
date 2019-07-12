import { memo } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const S = {
  Button: styled.button`background: #33A; color: white;`,
};

const SuperButton = () => (
  <S.Button>
    Alia button
  </S.Button>
);

export default memo(SuperButton);

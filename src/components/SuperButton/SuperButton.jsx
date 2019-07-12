import React, { memo } from 'react';
import styled from 'styled-components';

const S = {
  Button: styled.button`background: #33A; color: white;`,
};

const SuperButton = () => (
  <S.Button>
    Alia button
  </S.Button>
);

export default memo(SuperButton);

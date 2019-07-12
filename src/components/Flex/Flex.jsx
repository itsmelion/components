import styled, { css } from 'styled-components';
import { mobile } from '../../flamework/vars';

const flexNames = {
  none: '0 0 auto',
  flex: '1',
  nogrow: '0 1 auto',
  grow: '1 1 100%',
  initial: '0 1 auto',
  auto: '1 1 auto',
  stretch: '1 1 auto',
  noshrink: '1 0 auto',
};

const flexRules = (rule = 'flex', mobileRule = 'flex', breakpoint = mobile) => {
  if (typeof rule === 'string') {
    return css`
      flex: ${flexNames[rule]};
      @media ${breakpoint} {
        flex: ${flexNames[mobileRule]};
      }
    `;
  }

  return css`
    flex: 1 1 ${rule}%;
    max-width: ${rule}%;
    @media ${breakpoint} {
      flex: 1 1 ${mobileRule}%;
      max-width: ${mobileRule}%;
    }
  `;
};

export default styled.div`
  ${props => flexRules(props.flex, props.mobileFlex, props.breakpoint)}
`;

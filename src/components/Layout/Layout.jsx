import styled, { css } from 'styled-components';
import align from '../../align';
import { mobile } from '../../flamework/vars';
import { fill } from '../../flamework/utils';

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

export default styled.section`
  display: flex;
  flex: 0 0 auto;
  align-items: stretch;
  align-content: stretch;
  justify-content: flex-start;
  flex-wrap: ${props => (props.wrap && 'wrap') || 'nowrap'};

  flex-direction: ${(column, reverse) => (column && 'column' && reverse && 'column-reverse')
    || (column && 'column')
    || (reverse && 'row-reverse') || 'row'};

  ${props => align(props.align)}
  ${props => props.fill && fill}

  ${props => flexRules(props.flex || 'none', props.mobileFlex || 'none', props.breakpoint)}

  @media ${({ breakpoint = mobile }) => breakpoint} {
    flex-wrap: ${props => (props.mobileWrap && 'wrap') || 'nowrap'};

    flex-direction: ${(mobileRow, mobileReverse) => (mobileRow && 'row' && mobileReverse && 'row-reverse')
      || (mobileRow && 'row')
      || (mobileReverse && 'column-reverse') || 'column'};
  }
`;

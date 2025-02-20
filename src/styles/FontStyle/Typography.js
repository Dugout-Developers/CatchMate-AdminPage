import styled from 'styled-components';

/*
사용 방법 
기본 div 태그로 적용, as속성으로 원하는 태그 변경 가능
<Headline01 fontWeight="medium">이것은 기본적으로 div</Headline01>
<Headline01 fontWeight="medium" as="h1">이것은 h1</Headline01>
<Headline01 fontWeight="medium" as="span">이것은 span</Headline01>
*/
const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
};
export const Headline01 = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 28px;
  font-weight: ${(props) => fontWeights[props.fontWeight] || 600};
  line-height: 36px;
  letter-spacing: -1%;
  color: inherit;
`;

export const Headline02 = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: ${(props) => fontWeights[props.fontWeight] || 600};
  line-height: 31px;
`;

export const Headline03 = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: ${(props) => fontWeights[props.fontWeight] || 600};
  line-height: 26px;
  vertical-align: text-top;
`;

export const Body01 = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: ${(props) => fontWeights[props.fontWeight] || 500};
  line-height: 21px;
  vertical-align: text-top;
`;

export const Body02 = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: ${(props) => fontWeights[props.fontWeight] || 500};
  line-height: 18px;
  vertical-align: text-top;
`;

export const Body03 = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: ${(props) => fontWeights[props.fontWeight] || 500};
  line-height: 16px;
  vertical-align: text-top;
`;

export const Caption01 = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 11px;
  font-weight: ${(props) => fontWeights[props.fontWeight] || 500};
  line-height: 15px;
  vertical-align: text-top;
`;

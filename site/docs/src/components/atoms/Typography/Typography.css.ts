import { recipe } from '@vanilla-extract/recipes';

export const typographyStyle = recipe({
  base: {
    wordBreak: 'keep-all',
    whiteSpace: 'pre-line',
    letterSpacing: '-2%',
  },

  variants: {
    variant: {
      h1: { fontWeight: 700, fontSize: '90px', lineHeight: '100px' },
      h2: { fontWeight: 700, fontSize: '66px', lineHeight: '76px' },
      h3: { fontWeight: 700, fontSize: '52px', lineHeight: '60px' },
      h4: { fontWeight: 700, fontSize: '40px', lineHeight: '48px' },
      h5: { fontWeight: 700, fontSize: '32px', lineHeight: '38px' },
      sh1: { fontWeight: 700, fontSize: '24px', lineHeight: '32px' },
      sh2: { fontWeight: 700, fontSize: '20px', lineHeight: '28px' },
      sh3: { fontWeight: 700, fontSize: '16px', lineHeight: '24px' },
      sh4: { fontWeight: 700, fontSize: '14px', lineHeight: '20px' },
      sh5: { fontWeight: 700, fontSize: '12px', lineHeight: '18px' },
      b1: { fontWeight: 400, fontSize: '20px', lineHeight: '28px' },
      b2: { fontWeight: 400, fontSize: '18px', lineHeight: '26px' },
      b3: { fontWeight: 400, fontSize: '16px', lineHeight: '24px' },
      b4: { fontWeight: 400, fontSize: '14px', lineHeight: '20px' },
      b5: { fontWeight: 400, fontSize: '12px', lineHeight: '18px' },
      b6: { fontWeight: 400, fontSize: '10px', lineHeight: '16px' },
    },
  },
});

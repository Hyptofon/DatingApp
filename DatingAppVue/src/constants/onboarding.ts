export interface OnboardingStep {
  step: number;
  image: string;
  alt: string;
  description: string;
}

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    step: 1,
    image: '/img/illustration1.png',
    alt: 'Meet New People',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus tellus quis est pharetra fermentum. Curabitur dapibus neque id lacus hendrerit rhoncus.',
  },
  {
    step: 2,
    image: '/img/illustration2.png',
    alt: 'Born This Way',
    description:
      'Maecenas at ullamcid risla. Integer sollicitutdin sapien at nislneg egestas fringilla donec. Sed elementum vehicula risus eu finac corporss arcu sit.',
  },
  {
    step: 3,
    image: '/img/illustration3.png',
    alt: 'Couples on a Date',
    description:
      'Nam vitae commodo Vulto.Among sea qui ipscrh congue comodo ac biltagus.Donec eecendal rutrus dublca.Aliquam emit molestie odio et pulvinar.',
  },
];

// fonts/index.js
import localFont from 'next/font/local'
export const amazonEmber = localFont({
  src: [
    {
      path: '../../public/amazon-ember/Amazon Ember Cd RC Thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/amazon-ember/Amazon Ember Display Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/amazon-ember/Amazon Ember Display Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/amazon-ember/Amazon Ember Mono Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/amazon-ember/Amazon Ember Mono Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-amazon-ember',
  display: 'swap',
})
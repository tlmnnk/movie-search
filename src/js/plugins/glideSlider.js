import Glide, { Controls, Breakpoints, Swipe, Images } from '@glidejs/glide/dist/glide.modular.esm';

export default class glideSlider extends Glide {
  constructor() {
    super('.glide', {
      type: 'carousel',
      perView: 4,
      focusAt: 0,
      gap: 0,
      breakpoints: {
        1240: {
          perView: 3
        },
        930: {
          perView: 2
        },
        630: {
          perView: 1
        }
      }
    }).mount({ Controls, Breakpoints, Swipe, Images });
  }
}
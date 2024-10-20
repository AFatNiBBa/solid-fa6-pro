
import { Icon } from "../../index";

/**
 * A component that renders the `face-smiling-hands` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smiling-hands?s=light face-smiling-hands}
 * @preview ![face-smiling-hands](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-smiling-hands.svg)
 */
const FaceSmilingHands: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M110.9 175.4C143.3 91.5 224.7 32 320 32s176.7 59.5 209.1 143.4c3.2 8.2 12.4 12.4 20.7 9.2s12.4-12.4 9.2-20.7C522 68 428.9 0 320 0S118 68 81.1 163.9c-3.2 8.2 .9 17.5 9.2 20.7s17.5-.9 20.7-9.2zM290.1 478c-8.8-1.2-16.8 5-18 13.7s5 16.8 13.7 18c11.2 1.5 22.6 2.3 34.1 2.3s22.9-.8 34.1-2.3c8.8-1.2 14.9-9.2 13.7-18s-9.2-14.9-18-13.7c-9.8 1.3-19.7 2-29.9 2s-20.1-.7-29.9-2zM384 384.8l0-32.8 0-2.4 0-51.2c0-11 9-20 20-20c9.1 0 16.8 6.1 19.2 14.5c.2 .8 .4 1.7 .6 2.5c.1 1 .2 2 .2 3l0 11.7 0 8c0 7.1 8.6 10.7 13.7 5.7l5.7-5.7 10.4-10.4 2.3-2.3 9.4-9.4s0 0 0 0l51.3-51.3c5.6-5.6 14.3-6.2 20.5-1.8c.7 .5 1.4 1.1 2.1 1.8c6.2 6.2 6.2 16.4 0 22.6c0 0 0 0 0 0l-34 34L488 318.6s0 0 0 0c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0c0 0 0 0 0 0l17.3-17.3 34-34 16-16c3.1-3.1 7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7s4.7 7.2 4.7 11.3s-1.6 8.2-4.7 11.3c0 0 0 0 0 0l-16 16-34 34L520 350.6c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0c0 0 0 0 0 0l17.3-17.3 34-34s0 0 0 0s0 0 0 0c6.2-6.2 16.4-6.2 22.6 0c.7 .7 1.3 1.4 1.8 2.1c4.4 6.2 3.8 14.9-1.8 20.5c0 0 0 0 0 0l-5.1 5.1-26.9 26.9-2 2L552 382.6c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l17.3-17.3 2-2c6.2-6.2 16.4-6.2 22.6 0c.7 .7 1.3 1.4 1.8 2.1c4.4 6.2 3.8 14.9-1.8 20.5L584 414.6l-37.5 37.5C528.7 470 504.4 480 479.2 480c-52.6 0-95.2-42.6-95.2-95.2zM320 400c11.6 0 22.4-1.2 32.5-3.4C358.5 461.3 412.9 512 479.2 512c33.7 0 66.1-13.4 89.9-37.3l56.8-56.8c18.1-18.1 18.7-47.1 1.8-65.9c16.9-18.8 16.3-47.8-1.8-65.9c-1-1-2.1-2-3.2-3c3.7-15.7-.5-32.8-12.8-45s-29.4-16.5-45-12.8c-.9-1.1-1.9-2.2-3-3.2c-18.7-18.7-49.1-18.7-67.9 0L447 269.1c-9.4-13.7-25.1-22.7-43-22.7c-28.7 0-52 23.3-52 52l0 53.6 0 11.8c-9.8 2.7-20.4 4.2-32 4.2s-22.2-1.5-32-4.2l0-11.8 0-53.6c0-28.7-23.3-52-52-52c-17.9 0-33.6 9-43 22.7l-47.1-47.1c-18.7-18.7-49.1-18.7-67.9 0c-1 1-2 2.1-3 3.2c-15.7-3.7-32.8 .5-45 12.8s-16.5 29.4-12.8 45c-1.1 .9-2.2 1.9-3.2 3C-4.1 304.2-4.7 333.2 12.2 352c-16.9 18.8-16.3 47.8 1.8 65.9l56.8 56.8c23.9 23.9 56.2 37.3 89.9 37.3c66.3 0 120.7-50.7 126.7-115.4c10.1 2.2 21 3.4 32.5 3.4zM220.5 178.5c6.2-7.1 12.8-10.5 19.5-10.5s13.4 3.4 19.5 10.5c6.2 7.2 10.8 16.8 12.9 25.4c2.1 8.6 10.8 13.8 19.4 11.6s13.8-10.8 11.6-19.4c-3.2-12.7-9.8-27.1-19.9-38.6C273.6 145.9 258.8 136 240 136s-33.6 9.9-43.7 21.5c-10 11.5-16.7 25.9-19.9 38.6c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6c2.1-8.6 6.7-18.2 12.9-25.4zm147.1 25.4c2.1-8.6 6.7-18.2 12.9-25.4c6.2-7.1 12.8-10.5 19.5-10.5s13.4 3.4 19.5 10.5c6.2 7.2 10.8 16.8 12.9 25.4c2.1 8.6 10.8 13.8 19.4 11.6s13.8-10.8 11.6-19.4c-3.2-12.7-9.8-27.1-19.9-38.6C433.6 145.9 418.8 136 400 136s-33.6 9.9-43.7 21.5c-10 11.5-16.7 25.9-19.9 38.6c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6zM100.7 267.3s0 0 0 0c-6.2-6.2-6.2-16.4 0-22.6c.7-.7 1.4-1.3 2.1-1.8c6.2-4.4 14.9-3.8 20.5 1.8L174.6 296s0 0 0 0l9.4 9.4 2.3 2.3 10.4 10.4 5.7 5.7c5 5 13.7 1.5 13.7-5.7l0-8 0-11.7c0-1 .1-2 .2-3c.1-.9 .3-1.7 .6-2.5c2.4-8.4 10.1-14.5 19.2-14.5c11 0 20 9 20 20l0 51.2 0 2.4 0 32.8c0 52.6-42.6 95.2-95.2 95.2c-25.2 0-49.5-10-67.3-27.9L56 414.6 36.7 395.3c-5.6-5.6-6.2-14.3-1.8-20.5c.5-.7 1.1-1.4 1.8-2.1c6.2-6.2 16.4-6.2 22.6 0l2 2L78.6 392c2.6 2.6 6.8 2.6 9.4 0s2.6-6.8 0-9.4L70.7 365.3l-2-2L41.8 336.4l-5.1-5.1s0 0 0 0c-5.6-5.6-6.2-14.3-1.8-20.5c.5-.7 1.1-1.4 1.8-2.1c6.2-6.2 16.4-6.2 22.6 0c0 0 0 0 0 0s0 0 0 0l34 34L110.6 360s0 0 0 0c2.6 2.6 6.8 2.6 9.4 0s2.6-6.8 0-9.4l-17.3-17.3-34-34-16-16s0 0 0 0c-3.1-3.1-4.7-7.2-4.7-11.3s1.6-8.2 4.7-11.3s7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7l16 16 34 34L142.6 328s0 0 0 0c2.6 2.6 6.8 2.6 9.4 0s2.6-6.8 0-9.4c0 0 0 0 0 0l-17.3-17.3-34-34z" />
    </Icon>
);

export default FaceSmilingHands;
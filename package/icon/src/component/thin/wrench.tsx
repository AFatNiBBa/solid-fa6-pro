
import { Icon } from "../../index";

/**
 * A component that renders the `wrench` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=thin wrench}
 * @preview ![wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wrench.svg)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 118.6c0-8.5 3.4-16.6 9.4-22.6l71.5-71.5C385.6 19 369.2 16 352 16c-79.5 0-144 64.5-144 144c0 12.2 1.5 24 4.3 35.2c2.7 10.7 .2 22.9-8.4 31.5L32.9 397.8C22.1 408.6 16 423.2 16 438.5C16 470.2 41.8 496 73.5 496c15.3 0 29.9-6.1 40.7-16.9L285.3 308.1c8.6-8.6 20.7-11.1 31.5-8.4c11.3 2.8 23.1 4.3 35.2 4.3c79.5 0 144-64.5 144-144c0-17.2-3-33.6-8.5-48.9L416 182.6c-6 6-14.1 9.4-22.6 9.4L352 192c-17.7 0-32-14.3-32-32l0-41.4zm20.7-11.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l72.7-72.7c7.6-7.6 20.3-5.7 24.1 4.3c6.8 17.7 10.5 37 10.5 57.1c0 88.4-71.6 160-160 160c-13.5 0-26.6-1.7-39.2-4.8c-5.8-1.5-12 0-16.2 4.2L125.5 490.5C111.7 504.3 93 512 73.5 512C32.9 512 0 479.1 0 438.5c0-19.5 7.7-38.2 21.5-52L192.6 215.4c4.2-4.2 5.7-10.4 4.2-16.2c-3.2-12.5-4.8-25.6-4.8-39.2C192 71.6 263.6 0 352 0c20.1 0 39.4 3.7 57.1 10.5c10 3.8 11.8 16.5 4.3 24.1l-72.7 72.7zM80 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Wrench;
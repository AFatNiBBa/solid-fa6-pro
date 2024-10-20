
import { Icon } from "../../index";

/**
 * A component that renders the `bee` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bee?s=sharp-regular bee}
 * @preview ![bee](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bee.svg)
 */
const Bee: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M216 1.4l11.3 11.3 26.8 26.8C264.4 34.7 275.9 32 288 32s23.6 2.7 33.9 7.5l26.8-26.8L360 1.4 382.6 24 371.3 35.3 347.8 58.8C360.4 73 368 91.6 368 112c0 3-.2 6-.5 8.9C390.3 105 419 96 448 96c65 0 128 44.9 128 112c0 61.9-53.6 104.9-112.9 111.2c.6-5.1 .9-10.2 .9-15.2c0-11.2-1-22.2-3.1-32.8c40.5-5.1 67.1-34 67.1-63.2c0-32.2-32.3-64-80-64c-37.3 0-65.2 19.5-75.6 43.3C408.5 213.5 432 256 432 304c0 96-144 208-144 208s-144-112-144-208c0-48 23.5-90.5 59.6-116.7C193.2 163.5 165.3 144 128 144c-47.7 0-80 31.8-80 64c0 29.2 26.5 58.1 67.1 63.2c-2 10.6-3.1 21.6-3.1 32.8c0 5 .3 10.1 .9 15.2C53.6 312.9 0 269.9 0 208C0 140.9 63 96 128 96c29 0 57.7 9 80.5 24.9c-.3-2.9-.5-5.9-.5-8.9c0-20.4 7.6-39 20.2-53.2L204.7 35.3 193.4 24 216 1.4zM384 304l-192 0c0 8.7 2.4 19.4 7.7 32l176.6 0c5.3-12.6 7.7-23.3 7.7-32zM251.7 411.9c12.6 14.1 25.4 26.6 36.3 36.7c10.9-10.1 23.7-22.7 36.3-36.7c8.1-9 15.9-18.4 23.1-27.9l-118.9 0c7.2 9.5 15 18.9 23.1 27.9zM288 208c-35.5 0-66.6 19.3-83.2 48l166.3 0c-16.6-28.7-47.6-48-83.2-48z" />
    </Icon>
);

export default Bee;
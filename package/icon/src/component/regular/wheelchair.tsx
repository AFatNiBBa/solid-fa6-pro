
import { Icon } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=regular wheelchair}
 * @preview ![wheelchair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wheelchair.svg)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM120.5 247.2C78.1 263.2 48 304.1 48 352c0 61.9 50.1 112 112 112c42.8 0 80-24 98.9-59.3c6.2-11.7 20.8-16.1 32.5-9.9s16.1 20.8 9.9 32.5C274.3 477.7 221.2 512 160 512C71.6 512 0 440.4 0 352c0-68.5 43.1-126.9 103.5-149.7c12.4-4.7 26.2 1.6 30.9 14s-1.6 26.2-14 30.9zm67.2-118.8c13-2.4 25.5 6.3 27.9 19.3l5.1 28.3L344 176c13.3 0 24 10.7 24 24s-10.7 24-24 24l-114.5 0 13.4 73.4c.7 3.8 4 6.6 7.9 6.6l122.8 0c15.9 0 30.3 9.4 36.6 24l43 98.3 27.2-9.1c12.6-4.2 26.2 2.6 30.4 15.2s-2.6 26.2-15.2 30.4l-48 16c-11.8 3.9-24.6-1.8-29.6-13.1L368.3 352l-117.6 0c-27.1 0-50.3-19.4-55.1-46L168.4 156.3c-2.4-13 6.3-25.5 19.3-27.9z" />
    </Icon>
);

export default Wheelchair;
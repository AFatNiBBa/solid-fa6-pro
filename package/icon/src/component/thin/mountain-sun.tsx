
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=thin mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 144a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM560 0a80 80 0 1 1 0 160A80 80 0 1 1 560 0zM412.7 281.7l48.2-79C465 196.1 472.2 192 480 192s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8c0 33.8-27.4 61.1-61.1 61.1l-122.8 0s0 0 0 0L55.9 512C25 512 0 487 0 456.1c0-10.5 3-20.8 8.6-29.7L225.2 81c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7zm9.5 15.1l81.2 129.5c5.6 8.9 8.6 19.2 8.6 29.7c0 15.6-6.4 29.8-16.8 39.9l83.6 0c24.9 0 45.1-20.2 45.1-45.1c0-8.3-2.3-16.4-6.6-23.5L485.4 211c-1.2-1.9-3.2-3-5.4-3s-4.3 1.2-5.4 3l-52.4 85.8zM456.1 496c22 0 39.9-17.9 39.9-39.9c0-7.5-2.1-14.9-6.1-21.2L273.2 89.5C269.5 83.6 263 80 256 80s-13.5 3.6-17.2 9.5L22.1 434.9c-4 6.4-6.1 13.7-6.1 21.2c0 22 17.9 39.9 39.9 39.9l400.2 0z" />
    </Icon>
);

export default MountainSun;
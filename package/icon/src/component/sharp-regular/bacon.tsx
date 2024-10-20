
import { Icon } from "../../index";

/**
 * A component that renders the `bacon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bacon?s=sharp-regular bacon}
 * @preview ![bacon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bacon.svg)
 */
const Bacon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 352c16.2-7.3 31-14.3 44.6-21.1c118.5-59 141.5-98.6 166.2-141C239.1 141.4 269.6 89.2 448 0l97.4 121.7L576 160c-15.6 7.8-30 15.3-43.4 22.5C392.3 258.3 364.7 305.7 338.8 350c-27.5 47.2-53 91-210.8 162L30.9 390.7 0 352zm100.4 48.7c49.3-26.4 81.3-50 104.7-72c24.3-23 39.9-44.8 56.9-68.5l1.9-2.6c17.7-24.8 37-51.3 68.5-80.6c28.9-27 67.8-56 124.8-88.9L435.1 60.7c-64.8 34.5-103.6 61.8-128.5 84.1c-27.9 25-40 45-53.1 67.4l-1.5 2.5c-13.9 23.8-30.2 51.9-64.8 82.3c-26 22.9-61.2 46.3-112 72.2l25.2 31.4zm20.3 25.4l21.2 26.5c56.7-27.5 89.3-49.4 109.9-67.6c22.8-20.1 32.6-36.9 46.1-60l.7-1.2c14.9-25.5 32.9-55.6 71.9-90.6c29.9-26.8 71.3-55.7 131.6-88.8l-24.9-31.1c-57.8 32.9-95.7 61.4-123.2 87c-29 27.1-46.8 51.4-64.3 75.8l-2.2 3.1c-16.8 23.5-33.9 47.5-60.6 72.7c-25 23.6-57.9 47.8-106.3 74.1z" />
    </Icon>
);

export default Bacon;
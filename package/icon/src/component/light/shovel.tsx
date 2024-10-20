
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=light shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M396 34.6L352.9 77.8C342.1 88.6 336 103.2 336 118.5c0 31.8 25.8 57.5 57.5 57.5c15.3 0 29.9-6.1 40.7-16.9L477.4 116 396 34.6zM377.9 7.5C382.7 2.7 389.2 0 396 0s13.3 2.7 18.1 7.5l90.3 90.3c4.8 4.8 7.5 11.3 7.5 18.1s-2.7 13.3-7.5 18.1l-47.6 47.6c-16.8 16.8-39.6 26.2-63.3 26.2c-18.9 0-36.5-5.9-51-15.9L235.3 299.3l62.1 62.1c12.5 12.5 12.5 32.8 0 45.3l-58.5 58.5c-30 30-70.7 46.9-113.1 46.9L32 512c-17.7 0-32-14.3-32-32l0-93.7c0-42.4 16.9-83.1 46.9-113.1l58.5-58.5c12.5-12.5 32.8-12.5 45.3 0l62.1 62.1L319.9 169.4c-10-14.5-15.9-32-15.9-51c0-23.7 9.4-46.5 26.2-63.3L377.9 7.5zM32 480l93.7 0c33.9 0 66.5-13.5 90.5-37.5L274.7 384 128 237.3 69.5 295.8c-24 24-37.5 56.6-37.5 90.5L32 480z" />
    </Icon>
);

export default Shovel;
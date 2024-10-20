
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-mask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-mask?s=sharp-duotone-solid head-side-mask}
 * @preview ![head-side-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-mask.svg)
 */
const HeadSideMask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 224.3c0-20.3 2.7-39.9 7.7-58.6c77.4 57.5 154.8 115 232.3 172.5c0 57.9 0 115.8 0 173.8l-144 0-32 0 0-32 0-98.8C55 339.3 32 283 32 224.3zM58 119.5C95.6 48.4 170.3 0 256.3 0L288 0C390.1 0 473.6 79.7 479.7 180.3L537 252l7 8.8 0 11.2 0 16-259.1 0C209.2 231.8 133.6 175.6 58 119.5zM352 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M35 102.4l19.3 14.3L284.9 288 544 288l0 32-16 48-160 0-16 0 0 32 16 0 149.3 0-10.7 32L368 432l-16 0 0 32 16 0 128 0-16 48-208 0 0-173.8L25.7 155.3 6.4 141 35 102.4z" />
    </Icon>
);

export default HeadSideMask;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-mask` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-mask?s=duotone head-side-mask}
 * @preview ![head-side-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/head-side-mask.svg)
 */
const HeadSideMask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 224.2c0-20.2 2.7-39.9 7.7-58.5c77.4 57.5 154.8 115 232.3 172.5c0 57.9 0 115.8 0 173.8c-48 0-96 0-144 0c-17.7 0-32-14.3-32-32l0-72.7c0-16.7-6.9-32.5-17.1-45.8C48.6 322.4 32 274.1 32 224.2zM57.9 119.4C95.5 48.4 170.1 0 256 0l24 0c96.1 0 182.8 70.6 197.7 162.8c1.8 11.4 5.4 22.6 11.9 32.2l44.8 65.7c6.2 7.8 9.6 17.4 9.6 27.4l-259.1 0C209.2 231.8 133.6 175.6 57.9 119.4zM352 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M20.7 121.7c7.9-10.6 22.9-12.9 33.6-5L284.9 288 544 288l0 21.6c0 6.9-1.1 13.7-3.3 20.2L528 368l-160 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l149.3 0-10.7 32L368 432c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0-1.4 4.2c-8.7 26.1-33.2 43.8-60.7 43.8L272 512l0-173.8L25.7 155.3c-10.6-7.9-12.9-22.9-5-33.6z" />
    </Icon>
);

export default HeadSideMask;
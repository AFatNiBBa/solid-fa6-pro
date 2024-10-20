
import { Icon } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=light feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M102.2 348.1C89.9 302.4 89.8 224.5 160 154.3c40.6-40.6 98.9-69.8 159.1-89.6C379 44.9 438.2 35.3 477.9 32c0 0 .2 0 .4 .1c.3 .1 .6 .3 1 .7s.6 .7 .7 1c.1 .2 .1 .4 .1 .4c-3.3 39.7-12.9 98.9-32.7 158.7c-3.4 10.5-7.2 20.9-11.2 31.1l-125.5 0 37.6-37.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L116.1 373.3c-7-8.6-11.6-16.9-13.9-25.2zM116 418.6c11.7 9.9 24.7 18 39.6 22c54.1 14.6 144.7 14 224.8-66.1C471.5 283.5 505 120.5 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c4 14.8 12.1 27.8 22 39.6L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L116 418.6zm22.7-22.7L182.6 352l175.1 0c-70.2 70.2-148.2 70.1-193.8 57.8c-8.3-2.2-16.6-6.9-25.2-13.9zM385 320l-170.3 0 64-64 143.8 0c-10.8 22.9-23.2 44.6-37.4 64z" />
    </Icon>
);

export default FeatherPointed;
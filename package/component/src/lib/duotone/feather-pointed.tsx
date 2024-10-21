
import { Icon, generic } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=duotone feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M71.3 356.4c3.3 12.2 9.4 23.2 17 33.3L311 167c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17L122.3 423.7c10 7.6 21 13.7 33.3 17C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6c-6.4-6.4-15-10.1-24-10.1c-.9 0-1.8 0-2.6 .1C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4z" />
        <path d="M24 512c-6.2 0-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9L311 167c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 505c-4.7 4.7-10.8 7-17 7z" />
    </Icon>
);

export default FeatherPointed;
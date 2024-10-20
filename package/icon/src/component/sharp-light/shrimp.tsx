
import { Icon } from "../../index";

/**
 * A component that renders the `shrimp` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shrimp?s=sharp-light shrimp}
 * @preview ![shrimp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shrimp.svg)
 */
const Shrimp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l16 0 416 0 16 0 0 32-16 0L32 64l0 64 304 0c97.2 0 176 78.8 176 176s-78.8 176-176 176l-64 0-16 0-16 0-29.9 0 16.6-24.9L252.8 416l-26.1-39.1-21.8-32.8 38.5 8.3L348.9 375c3.2 .7 6.4 1 9.7 1c14 0 25.4-11.4 25.4-25.4l0-2.6c0-15.5-12.5-28-28-28l-116 0c-91.8 0-167.2-70.3-175.3-160L16 160 0 160l0-16L0 48 0 32zM336 448l0-43.1-60.8-13 10.2 15.2 5.9 8.9-5.9 8.9L269.9 448l2.1 0 64 0zm32-3.6c33-7.5 61.7-26.3 81.7-52.1l-39.8-15.9c-8.1 16.1-23.5 27.8-41.9 30.8l0 37.2zm98.7-79.8c8.6-18.4 13.3-39 13.3-60.6c0-9.3-.9-18.3-2.5-27.1l-67.4 45c3.3 6.9 5.4 14.4 5.9 22.4l50.8 20.3zm.8-119.5C447 199.6 403.6 166.6 352 160.9L352 288l4 0c12 0 23.3 3.6 32.7 9.7l78.8-52.5zM320 160L96.9 160c8 72 69 128 143.1 128l80 0 0-128zM208 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Shrimp;
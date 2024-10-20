
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=light arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c123.7 0 224 100.3 224 224c0 8.8 7.2 16 16 16s16-7.2 16-16C512 114.6 397.4 0 256 0S0 114.6 0 256c0 8.8 7.2 16 16 16s16-7.2 16-16C32 132.3 132.3 32 256 32zM396 309.4l-128-144c-3-3.4-7.4-5.4-12-5.4s-8.9 2-12 5.4l-128 144c-5.9 6.6-5.3 16.7 1.3 22.6s16.7 5.3 22.6-1.3L240 218.1 240 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-277.9L372 330.6c5.9 6.6 16 7.2 22.6 1.3s7.2-16 1.3-22.6z" />
    </Icon>
);

export default ArrowUpToArc;
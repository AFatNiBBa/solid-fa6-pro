
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=light arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480c123.7 0 224-100.3 224-224c0-8.8 7.2-16 16-16s16 7.2 16 16c0 141.4-114.6 256-256 256S0 397.4 0 256c0-8.8 7.2-16 16-16s16 7.2 16 16c0 123.7 100.3 224 224 224zM396 202.6l-128 144c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4l-128-144c-5.9-6.6-5.3-16.7 1.3-22.6s16.7-5.3 22.6 1.3L240 293.9 240 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 277.9L372 181.4c5.9-6.6 16-7.2 22.6-1.3s7.2 16 1.3 22.6z" />
    </Icon>
);

export default ArrowDownToArc;
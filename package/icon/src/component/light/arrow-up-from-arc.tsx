
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=light arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480C132.3 480 32 379.7 32 256c0-8.8-7.2-16-16-16s-16 7.2-16 16C0 397.4 114.6 512 256 512s256-114.6 256-256c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 123.7-100.3 224-224 224zM116 149.4c-5.9 6.6-5.3 16.7 1.3 22.6s16.7 5.3 22.6-1.3L240 58.1 240 336c0 8.8 7.2 16 16 16s16-7.2 16-16l0-277.9L372 170.6c5.9 6.6 16 7.2 22.6 1.3s7.2-16 1.3-22.6L268 5.4C264.9 2 260.6 0 256 0s-8.9 2-12 5.4l-128 144z" />
    </Icon>
);

export default ArrowUpFromArc;
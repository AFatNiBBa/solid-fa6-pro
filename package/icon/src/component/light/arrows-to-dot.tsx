
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=light arrows-to-dot}
 * @preview ![arrows-to-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrows-to-dot.svg)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 121.4L187.3 84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 137.4 272 16zm16 240a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm59.3 171.3c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 374.6 240 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-121.4 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0zM84.7 164.7c-6.2 6.2-6.2 16.4 0 22.6L137.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l121.4 0L84.7 324.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0zm342.6 0c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L374.6 272 496 272c8.8 0 16-7.2 16-16s-7.2-16-16-16l-121.4 0 52.7-52.7c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default ArrowsToDot;
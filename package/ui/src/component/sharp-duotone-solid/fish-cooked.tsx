
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish-cooked` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-cooked?s=sharp-duotone-solid fish-cooked}
 * @preview ![fish-cooked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fish-cooked.svg)
 */
const FishCooked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 48L32 256 0 368l0 48 103.1-82.5C152.2 390.6 239.7 448 320 448c176 0 256-192 256-192s-80-192-256-192c-77.3 0-161.3 53.2-211.3 108.1L0 96zM217.4 224l11.3-11.3 64-64L304 137.4c7.5 7.5 15.1 15.1 22.6 22.6c-3.8 3.8-7.5 7.5-11.3 11.3l-64 64c-3.8 3.8-7.5 7.5-11.3 11.3c-7.5-7.5-15.1-15.1-22.6-22.6zm16 112l11.3-11.3c53.3-53.3 106.7-106.7 160-160c3.8-3.8 7.5-7.5 11.3-11.3c7.5 7.5 15.1 15.1 22.6 22.6c-3.8 3.8-7.5 7.5-11.3 11.3c-53.3 53.3-106.7 106.7-160 160c-3.8 3.8-7.5 7.5-11.3 11.3c-7.5-7.5-15.1-15.1-22.6-22.6zm112 16c3.8-3.8 7.5-7.5 11.3-11.3c21.3-21.3 42.7-42.7 64-64c3.8-3.8 7.5-7.5 11.3-11.3c7.5 7.5 15.1 15.1 22.6 22.6c-3.8 3.8-7.5 7.5-11.3 11.3c-21.3 21.3-42.7 42.7-64 64L368 374.6 345.4 352z" />
        <path d="M326.6 160l-11.3 11.3-64 64L240 246.6 217.4 224l11.3-11.3 64-64L304 137.4 326.6 160zm112 16l-11.3 11.3-160 160L256 358.6 233.4 336l11.3-11.3 160-160L416 153.4 438.6 176zm16 112l-11.3 11.3-64 64L368 374.6 345.4 352l11.3-11.3 64-64L432 265.4 454.6 288z" />
    </Icon>
);

export default FishCooked;
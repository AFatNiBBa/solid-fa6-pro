
import { Icon } from "../../index";

/**
 * A component that renders the `h6` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h6?s=light h6}
 * @preview ![h6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/h6.svg)
 */
const H6: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80L0 256 0 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160 256 0 0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160L32 240 32 80zM505.4 67.1c-7.1-5.2-17.2-3.6-22.4 3.5L383.3 207.8C363 235.7 352 269.4 352 304c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144c-15 0-29.6 2.3-43.2 6.6l56.1-77.2c5.2-7.1 3.6-17.2-3.5-22.4zM496 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224z" />
    </Icon>
);

export default H6;
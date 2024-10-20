
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=duotone bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 35.3 28.7 64 64 64l0 176c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-176c35.3 0 64-28.7 64-64C480 64 304 32 240 32S0 64 0 192z" />
        <path d="M368 480l160 0c26.5 0 48-21.5 48-48l0-176c35.3 0 64-28.7 64-64C640 64 464 32 400 32L240 32c64 0 240 32 240 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48z" />
    </Icon>
);

export default BreadLoaf;
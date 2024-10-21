
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=solid bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 192C0 64 176 32 240 32s240 32 240 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48l0-176c-35.3 0-64-28.7-64-64zM397.4 34.9c-2-.9-4.1-1.9-6.2-2.8c3.1-.1 6-.2 8.8-.2c64 0 240 32 240 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48l-96 0c10-13.4 16-30 16-48l0-149.5c37.3-13.2 64-48.7 64-90.5c0-82.2-57.6-130.7-114.6-157.1z" />
    </Icon>
);

export default BreadLoaf;
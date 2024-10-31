
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=thin grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm88 0l64 0 72 0 72 0 64 0c13.3 0 24 10.7 24 24l0 136 0 136c0 13.3-10.7 24-24 24l-64 0-72 0-72 0-64 0c-13.3 0-24-10.7-24-24l0-136 0-136c0-13.3 10.7-24 24-24zm-8 24l0 128 64 0 0-136-56 0c-4.4 0-8 3.6-8 8zm80 128l56 0 0-136-56 0 0 136zm72 0l56 0 0-136-56 0 0 136zm72 0l64 0 0-128c0-4.4-3.6-8-8-8l-56 0 0 136zm0 16l0 136 56 0c4.4 0 8-3.6 8-8l0-128-64 0zm-16 0l-56 0 0 136 56 0 0-136zm-72 0l-56 0 0 136 56 0 0-136zm-72 0l-64 0 0 128c0 4.4 3.6 8 8 8l56 0 0-136z" />
    </Icon>
);

export default Grate;
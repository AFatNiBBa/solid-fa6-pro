
import { Icon } from "../../index";

/**
 * A component that renders the `hand-dots` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-dots?s=sharp-light hand-dots}
 * @preview ![hand-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hand-dots.svg)
 */
const HandDots: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0l16 0 80 0 16 0 0 16 0 16 64 0 16 0 0 16 0 48s0 0 0 0l64 0 16 0 0 16 0 224c0 97.2-78.8 176-176 176c0 0 0 0 0 0l-8.5 0c-65.8 0-128.9-26.1-175.4-72.6L16.4 335.6 4.7 323.9 0 319.2l0-6.6 0-33.1 0-6.6 4.7-4.7 40-40L56 216.8l11.3 11.3 28.3 28.3L128 288.8 128 48l0-16 16 0 64 0 0-16 0-16zM368 128l0-16 0-48-48 0 0 16 0 160 0 16-32 0 0-16 0-160 0-16s0 0 0 0l0-16 0-16-48 0 0 16 0 192 0 16-32 0 0-16 0-176-48 0 0 240 0 6.6-4.7 4.7L143.6 327l-11.3 11.3L121 327 73 279l-17-17-24 24 0 19.9 7 7L142.8 416.7c40.5 40.5 95.4 63.3 152.7 63.3l8.4 0c0 0 0 0 0 0c79.5 0 144-64.5 144-144l0-208-48 0 0 112 0 16-32 0 0-16 0-112s0 0 0 0zM240 320a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM320 416a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-64-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-80-32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default HandDots;
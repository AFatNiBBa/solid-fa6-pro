
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=sharp-light box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M42.1 160L208 160l0-96L84.8 64 42.1 160zM208 192L32 192l0 256 384 0 0-256-176 0-32 0zM363.2 64L240 64l0 96 165.9 0L363.2 64zM64 32l320 0 64 144 0 272 0 32-32 0L32 480 0 480l0-32L0 176 64 32zM331.3 251.3l-128 128L192 390.6l-11.3-11.3-64-64L105.4 304 128 281.4l11.3 11.3L192 345.4 308.7 228.7 320 217.4 342.6 240l-11.3 11.3z" />
    </Icon>
);

export default BoxCheck;
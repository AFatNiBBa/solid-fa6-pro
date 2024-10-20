
import { Icon } from "../../index";

/**
 * A component that renders the `wind` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=sharp-light wind}
 * @preview ![wind](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wind.svg)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 32 16 0 64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L16 128 0 128l0 32 16 0 352 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L304 0 288 0zm64 416l16 0 56 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L16 240 0 240l0 32 16 0 408 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-56 0-16 0 0 32zM112 512l64 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L16 352 0 352l0 32 16 0 160 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0-16 0 0 32 16 0z" />
    </Icon>
);

export default Wind;
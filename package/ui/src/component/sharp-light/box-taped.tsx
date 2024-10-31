
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=sharp-light box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M42.1 160L84.8 64 178 64l-18 96-16 0L42.1 160zM144 192l16 0 0 64 0 32 32 0 64 0 32 0 0-32 0-64 16 0 112 0 0 256L32 448l0-256 112 0zm48 0l64 0 0 64-64 0 0-64zm96-32L270 64l93.2 0 42.7 96L304 160l-16 0zm-32.6 0l-62.9 0 18-96 26.9 0 18 96zM264 32l-80 0L64 32 0 176 0 448l0 32 32 0 384 0 32 0 0-32 0-272L384 32 264 32z" />
    </Icon>
);

export default BoxTaped;
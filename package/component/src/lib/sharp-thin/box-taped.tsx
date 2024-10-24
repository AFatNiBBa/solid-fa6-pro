
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=sharp-thin box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M17.5 176L74.4 48l114.2 0L161.7 176 144 176 17.5 176zM144 192l16 0 0 96 0 16 16 0 96 0 16 0 0-16 0-96 16 0 128 0 0 272L16 464l0-272 128 0zm32 0l96 0 0 96-96 0 0-96zm110.3-16L259.4 48l114.2 0 56.9 128L304 176l-17.7 0zM270 176L178 176 205 48l3 0 8 0 16 0 8 0 3 0L270 176zM256 32l-64 0L64 32 0 176 0 464l0 16 16 0 416 0 16 0 0-16 0-288L384 32 256 32z" />
    </Icon>
);

export default BoxTaped;
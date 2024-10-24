
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-curly` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=regular bracket-curly}
 * @preview ![bracket-curly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bracket-curly.svg)
 */
const BracketCurly: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 120c0-48.6 39.4-88 88-88l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-22.1 0-40 17.9-40 40l0 45.5c0 23.3-9.3 45.7-25.8 62.2L57.9 256l28.3 28.3c16.5 16.5 25.8 38.9 25.8 62.2l0 45.5c0 22.1 17.9 40 40 40l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-48.6 0-88-39.4-88-88l0-45.5c0-10.6-4.2-20.8-11.7-28.3L7 273c-9.4-9.4-9.4-24.6 0-33.9l45.3-45.3c7.5-7.5 11.7-17.7 11.7-28.3L64 120z" />
    </Icon>
);

export default BracketCurly;

import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-bracket` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-bracket?s=regular arrow-down-to-bracket}
 * @preview ![arrow-down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-to-bracket.svg)
 */
const ArrowDownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M369 217L241 345c-9.4 9.4-24.6 9.4-33.9 0L79 217c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87L200 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 246.1 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM48 344l0 80c0 22.1 17.9 40 40 40l272 0c22.1 0 40-17.9 40-40l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80c0 48.6-39.4 88-88 88L88 512c-48.6 0-88-39.4-88-88l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ArrowDownToBracket;
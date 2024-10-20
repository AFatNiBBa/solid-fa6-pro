
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=thin arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-left-to-bracket.svg)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M298.3 114.3l-136 136c-3.1 3.1-3.1 8.2 0 11.3l136 136c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 264 504 264c4.4 0 8-3.6 8-8s-3.6-8-8-8l-316.7 0L309.7 125.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0zM184 464l-96 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
    </Icon>
);

export default ArrowLeftToBracket;
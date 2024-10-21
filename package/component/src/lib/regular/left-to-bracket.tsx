
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=regular left-to-bracket}
 * @preview ![left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/left-to-bracket.svg)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 365.8L210 256 320 146.2l0 53.8c0 13.3 10.7 24 24 24l120 0 0 64-120 0c-13.3 0-24 10.7-24 24l0 53.8zM160 256c0 11.5 4.6 22.5 12.7 30.6L288.8 402.4c8.7 8.7 20.5 13.6 32.8 13.6c25.6 0 46.4-20.8 46.4-46.4l0-33.6 96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-96 0 0-33.6c0-25.6-20.8-46.4-46.4-46.4c-12.3 0-24.1 4.9-32.8 13.6L172.7 225.4c-8.1 8.1-12.7 19.1-12.7 30.6zm8 176l-80 0c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default LeftToBracket;
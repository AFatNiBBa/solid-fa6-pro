
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=thin left-to-bracket}
 * @preview ![left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/left-to-bracket.svg)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M179.3 264c-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8L311.4 116.2c2.7-2.7 6.4-4.2 10.2-4.2c8 0 14.4 6.5 14.4 14.4l0 73.6c0 4.4 3.6 8 8 8l136 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-136 0c-4.4 0-8 3.6-8 8l0 73.6c0 8-6.5 14.4-14.4 14.4c-3.8 0-7.5-1.5-10.2-4.2L179.3 264zM160 256c0 7.2 2.9 14.2 8 19.3L300.1 407.1c5.7 5.7 13.4 8.9 21.5 8.9c16.8 0 30.4-13.6 30.4-30.4l0-65.6 128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0 0-65.6c0-16.8-13.6-30.4-30.4-30.4c-8.1 0-15.8 3.2-21.5 8.9L168 236.7c-5.1 5.1-8 12.1-8 19.3zm24 208l-96 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
    </Icon>
);

export default LeftToBracket;
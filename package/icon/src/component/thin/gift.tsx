
import { Icon } from "../../index";

/**
 * A component that renders the `gift` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=thin gift}
 * @preview ![gift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gift.svg)
 */
const Gift: typeof Icon = x => (
    <Icon {...x}>
        <path d="M373.1 16c-20.3 0-39.2 10.5-50 27.7L270.4 128l25.6 0 80 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-2.9 0zM241.6 128L188.9 43.7C178.1 26.5 159.2 16 138.9 16L136 16c-30.9 0-56 25.1-56 56s25.1 56 56 56l80 0 25.6 0zm14.4-7.1l53.6-85.7C323.3 13.3 347.3 0 373.1 0L376 0c39.8 0 72 32.2 72 72c0 22.6-10.4 42.8-26.7 56l42.7 0c26.5 0 48 21.5 48 48l0 32c0 20.9-13.4 38.7-32 45.3l0 2.7 0 192c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-192 0-2.7C13.4 246.7 0 228.9 0 208l0-32c0-26.5 21.5-48 48-48l42.7 0C74.4 114.8 64 94.6 64 72C64 32.2 96.2 0 136 0l2.9 0c25.8 0 49.8 13.3 63.5 35.2L256 120.9zM136 144l-88 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l200 0 0-96-32 0-80 0zm128 0l0 96 200 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-88 0-80 0-32 0zM248 256L48 256l0 192c0 26.5 21.5 48 48 48l152 0 0-240zm16 240l152 0c26.5 0 48-21.5 48-48l0-192-200 0 0 240z" />
    </Icon>
);

export default Gift;
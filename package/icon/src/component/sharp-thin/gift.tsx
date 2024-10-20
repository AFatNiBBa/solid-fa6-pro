
import { Icon } from "../../index";

/**
 * A component that renders the `gift` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=sharp-thin gift}
 * @preview ![gift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gift.svg)
 */
const Gift: typeof Icon = x => (
    <Icon {...x}>
        <path d="M373.1 16c-20.3 0-39.2 10.5-50 27.7L270.4 128l25.6 0 80 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-2.9 0zM241.6 128L188.9 43.7C178.1 26.5 159.2 16 138.9 16L136 16c-30.9 0-56 25.1-56 56s25.1 56 56 56l80 0 25.6 0zm14.4-7.1l53.6-85.7C323.3 13.3 347.3 0 373.1 0L376 0c39.8 0 72 32.2 72 72c0 22.6-10.4 42.8-26.7 56l74.7 0 16 0 0 16 0 96 0 16-16 0-16 0 0 240 0 16-16 0L48 512l-16 0 0-16 0-240-16 0L0 256l0-16 0-96 0-16 16 0 74.7 0C74.4 114.8 64 94.6 64 72C64 32.2 96.2 0 136 0l2.9 0c25.8 0 49.8 13.3 63.5 35.2L256 120.9zM136 144L16 144l0 96 16 0 16 0 200 0 0-96-32 0-80 0zm128 0l0 96 200 0 16 0 16 0 0-96-120 0-80 0-32 0zM248 256L48 256l0 240 200 0 0-240zm16 240l200 0 0-240-200 0 0 240z" />
    </Icon>
);

export default Gift;
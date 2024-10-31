
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-curly` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=thin bracket-curly}
 * @preview ![bracket-curly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bracket-curly.svg)
 */
const BracketCurly: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 88c0-30.9 25.1-56 56-56l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0C97.9 48 80 65.9 80 88l0 77.5c0 19.1-7.6 37.4-21.1 50.9L19.3 256l39.6 39.6C72.4 309.1 80 327.4 80 346.5L80 424c0 22.1 17.9 40 40 40l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-30.9 0-56-25.1-56-56l0-77.5c0-14.9-5.9-29.1-16.4-39.6L2.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l45.3-45.3C58.1 194.6 64 180.3 64 165.5L64 88z" />
    </Icon>
);

export default BracketCurly;
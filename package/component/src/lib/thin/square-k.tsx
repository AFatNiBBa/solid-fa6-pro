
import { Icon } from "../../index";

/**
 * A component that renders the `square-k` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=thin square-k}
 * @preview ![square-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-k.svg)
 */
const SquareK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm317.4 45.9L215.2 236.3 318.4 371.1c2.7 3.5 2 8.5-1.5 11.2s-8.5 2-11.2-1.5L203.4 247.2 144 302l0 74c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-77.5L128 136c0-4.4 3.6-8 8-8s8 3.6 8 8l0 144.2L306.6 130.1c3.2-3 8.3-2.8 11.3 .5s2.8 8.3-.5 11.3z" />
    </Icon>
);

export default SquareK;
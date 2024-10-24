
import { Icon } from "../../index";

/**
 * A component that renders the `square-w` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=thin square-w}
 * @preview ![square-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-w.svg)
 */
const SquareW: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm95.7 53.7L160 364l56.4-190.3c1-3.4 4.1-5.7 7.7-5.7s6.7 2.3 7.7 5.7L288 364l64.3-214.3c1.3-4.2 5.7-6.6 10-5.4s6.6 5.7 5.4 10l-72 240c-1 3.4-4.1 5.7-7.7 5.7s-6.7-2.3-7.7-5.7L224 204.2 167.7 394.3c-1 3.4-4.1 5.7-7.7 5.7s-6.7-2.3-7.7-5.7l-72-240c-1.3-4.2 1.1-8.7 5.4-10s8.7 1.1 10 5.4z" />
    </Icon>
);

export default SquareW;
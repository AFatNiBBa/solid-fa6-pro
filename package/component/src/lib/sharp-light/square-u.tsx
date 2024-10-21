
import { Icon } from "../../index";

/**
 * A component that renders the `square-u` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-u?s=sharp-light square-u}
 * @preview ![square-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-u.svg)
 */
const SquareU: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM144 160l0 128c0 44.2 35.8 80 80 80s80-35.8 80-80l0-128 0-16 32 0 0 16 0 128c0 56.4-41.7 103.1-96 110.9l0 1.1-16 0c-61.9 0-112-50.1-112-112l0-128 0-16 32 0 0 16z" />
    </Icon>
);

export default SquareU;
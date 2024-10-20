
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-arc?s=regular arrow-left-from-arc}
 * @preview ![arrow-left-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-left-from-arc.svg)
 */
const ArrowLeftFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-114.9-93.1-208-208-208c-13.3 0-24-10.7-24-24s10.7-24 24-24C397.4 0 512 114.6 512 256s-114.6 256-256 256c-13.3 0-24-10.7-24-24s10.7-24 24-24c114.9 0 208-93.1 208-208zM119.7 134.4c9.7-9 24.9-8.5 33.9 1.3s8.5 24.9-1.3 33.9L85.1 232 328 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L85.1 280l67.2 62.4c9.7 9 10.3 24.2 1.3 33.9s-24.2 10.3-33.9 1.3l-112-104C2.8 269 0 262.7 0 256s2.8-13 7.7-17.6l112-104z" />
    </Icon>
);

export default ArrowLeftFromArc;
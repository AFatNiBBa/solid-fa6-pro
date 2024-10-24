
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=regular arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-114.9-93.1-208-208-208c-13.3 0-24-10.7-24-24s10.7-24 24-24C397.4 0 512 114.6 512 256s-114.6 256-256 256c-13.3 0-24-10.7-24-24s10.7-24 24-24c114.9 0 208-93.1 208-208zM232.3 134.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6s-2.8 13-7.7 17.6l-112 104c-9.7 9-24.9 8.5-33.9-1.3s-8.5-24.9 1.3-33.9L266.9 280 24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l242.9 0-67.2-62.4c-9.7-9-10.3-24.2-1.3-33.9s24.2-10.3 33.9-1.3z" />
    </Icon>
);

export default ArrowRightToArc;
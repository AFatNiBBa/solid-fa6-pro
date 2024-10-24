
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=regular arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48c13.3 0 24-10.7 24-24s-10.7-24-24-24C114.6 0 0 114.6 0 256S114.6 512 256 512c13.3 0 24-10.7 24-24s-10.7-24-24-24C141.1 464 48 370.9 48 256zM279.7 134.4l-112 104c-4.9 4.5-7.7 10.9-7.7 17.6s2.8 13 7.7 17.6l112 104c9.7 9 24.9 8.5 33.9-1.3s8.5-24.9-1.3-33.9L245.1 280 488 280c13.3 0 24-10.7 24-24s-10.7-24-24-24l-242.9 0 67.2-62.4c9.7-9 10.3-24.2 1.3-33.9s-24.2-10.3-33.9-1.3z" />
    </Icon>
);

export default ArrowLeftToArc;
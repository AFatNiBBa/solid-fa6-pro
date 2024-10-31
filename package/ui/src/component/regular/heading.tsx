
import { Icon } from "../../index";

/**
 * A component that renders the `heading` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=regular heading}
 * @preview ![heading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/heading.svg)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 144 240 0 0-144-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 168 0 184 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-160-240 0 0 160 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 480c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-184L56 80 24 80C10.7 80 0 69.3 0 56z" />
    </Icon>
);

export default Heading;
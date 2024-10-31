
import { Icon } from "../../index";

/**
 * A component that renders the `underline` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=regular underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 56c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 144c0 61.9 50.1 112 112 112s112-50.1 112-112l0-144-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 144c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 80 40 80C26.7 80 16 69.3 16 56zM0 456c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 480c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Underline;
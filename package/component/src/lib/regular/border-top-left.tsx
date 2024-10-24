
import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=regular border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-352c0-13.3 10.7-24 24-24l352 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 32C32.2 32 0 64.2 0 104L0 456zm128-40a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm192 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm-96 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BorderTopLeft;
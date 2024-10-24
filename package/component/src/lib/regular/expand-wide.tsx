
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=regular expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136 64c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 88c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 88C0 74.7 10.7 64 24 64l112 0zM0 312c0-13.3 10.7-24 24-24s24 10.7 24 24l0 88 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 448c-13.3 0-24-10.7-24-24L0 312zM488 64c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-88-88 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0zM464 312c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l88 0 0-88z" />
    </Icon>
);

export default ExpandWide;
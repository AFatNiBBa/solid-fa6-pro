
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=regular arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M296 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l70.1 0L7 439c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l359-359 0 70.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-128c0-13.3-10.7-24-24-24L296 32zM41 39C31.6 29.7 16.4 29.7 7 39S-2.3 63.6 7 73L167.4 233.4l33.9-33.9L41 39zM246.6 312.6L366.1 432 296 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0c13.3 0 24-10.7 24-24l0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 70.1L280.6 278.6l-33.9 33.9z" />
    </Icon>
);

export default ArrowsCross;
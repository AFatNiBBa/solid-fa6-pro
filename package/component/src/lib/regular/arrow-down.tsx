
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=regular arrow-down}
 * @preview ![arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down.svg)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M174.6 472.6c4.5 4.7 10.8 7.4 17.4 7.4s12.8-2.7 17.4-7.4l168-176c9.2-9.6 8.8-24.8-.8-33.9s-24.8-8.8-33.9 .8L216 396.1 216 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 340.1L41.4 263.4c-9.2-9.6-24.3-9.9-33.9-.8s-9.9 24.3-.8 33.9l168 176z" />
    </Icon>
);

export default ArrowDown;
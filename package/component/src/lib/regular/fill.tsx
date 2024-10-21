
import { Icon } from "../../index";

/**
 * A component that renders the `fill` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=regular fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path d="M73 7C63.6-2.3 48.4-2.3 39 7s-9.4 24.6 0 33.9l89.4 89.4L30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L148.1 481.4c37.5 37.5 98.3 37.5 135.8 0L474.3 290.9c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0L162.3 96.4 73 7zm89.4 157.3L231 233c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-68.7-68.7L255 71.6c9.4-9.4 24.6-9.4 33.9 0L440.4 223c9.4 9.4 9.4 24.6 0 33.9l-31 31L51.2 288c1.6-9.5 6.1-18.6 13.4-25.9l97.8-97.8z" />
    </Icon>
);

export default Fill;
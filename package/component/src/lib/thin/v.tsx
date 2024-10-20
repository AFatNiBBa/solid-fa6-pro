
import { Icon } from "../../index";

/**
 * A component that renders the `v` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=thin v}
 * @preview ![v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/v.svg)
 */
const V: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M4.9 32.6c4.1-1.7 8.8 .2 10.5 4.2L192 451.6 368.6 36.9c1.7-4.1 6.4-6 10.5-4.2s6 6.4 4.2 10.5l-184 432c-1.3 3-4.2 4.9-7.4 4.9s-6.1-1.9-7.4-4.9L.6 43.1c-1.7-4.1 .2-8.8 4.2-10.5z" />
    </Icon>
);

export default V;

import { Icon } from "../../index";

/**
 * A component that renders the `alt` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=solid alt}
 * @preview ![alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/alt.svg)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 64c-9.7 0-18.9 4.4-25 12L176.6 384 32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c9.7 0 18.9-4.4 25-12L463.4 128 608 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L448 64zm0 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0z" />
    </Icon>
);

export default Alt;
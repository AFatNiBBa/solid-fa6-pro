
import { Icon } from "../../index";

/**
 * A component that renders the `heading` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=thin heading}
 * @preview ![heading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/heading.svg)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l64 0 64 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L80 48l0 192 288 0 0-192-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l64 0 64 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 200 0 216 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0-64 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-208L80 256l0 208 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-216L64 48 8 48c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Heading;
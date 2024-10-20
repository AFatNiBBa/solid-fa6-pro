
import { Icon } from "../../index";

/**
 * A component that renders the `r` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=regular r}
 * @preview ![r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/r.svg)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M56 32C25.1 32 0 57.1 0 88L0 280 0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-152 109.9 0L276.5 469.9c7.7 10.8 22.7 13.3 33.5 5.6s13.3-22.7 5.6-33.5L214.5 300.6C274.9 286.7 320 232.6 320 168c0-75.1-60.9-136-136-136L56 32zM176 256L48 256 48 88c0-4.4 3.6-8 8-8l128 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-8 0z" />
    </Icon>
);

export default R;
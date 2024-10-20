
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=sharp-thin bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 16l0-16L496 0 144 0 128 0l0 12.7 16 12.6 0-9.3 352 0 0 287.2 16 12.6L512 16zM144 484.1l0-275.4-16-12.6 0 297.3 0 18.5 16-9.3L320 400 496 502.7l16 9.3 0-12.7L483.7 477 328.1 386.2l-8.1-4.7-8.1 4.7L144 484.1zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default BookmarkSlash;
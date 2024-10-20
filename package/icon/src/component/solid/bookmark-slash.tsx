
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=solid bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376l0-328c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48l0 27L38.8 5.1zM128 487.7c0 13.4 10.9 24.3 24.3 24.3c5 0 9.9-1.5 14-4.4L320 400 473.7 507.6c4.1 2.9 9 4.4 14 4.4c9.9 0 18.4-5.9 22.2-14.3L128 196.9l0 290.8z" />
    </Icon>
);

export default BookmarkSlash;
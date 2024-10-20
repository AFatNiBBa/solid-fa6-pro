
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=regular bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376l0-328c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48l0 27L38.8 5.1zM176 112.6L176 48l288 0 0 290.4L176 112.6zM509.9 497.8L315.3 344.5c-3.3 .6-6.5 2-9.3 4L176 441.4l0-206.7-48-37.8L128 488c0 9 5 17.2 13 21.3s17.6 3.4 24.9-1.8L320 397.5l154.1 110c7.3 5.2 16.9 5.9 24.9 1.8c4.9-2.5 8.8-6.7 10.9-11.6z" />
    </Icon>
);

export default BookmarkSlash;
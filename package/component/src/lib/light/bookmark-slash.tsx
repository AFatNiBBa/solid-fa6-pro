
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=light bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 48c0-26.5-21.5-48-48-48L176 0c-18.9 0-35.2 10.9-43.1 26.8L160 48.1l0-.1c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16l0 252.8L512 326l0-278zM160 471.4l0-260.2L128 186l0 303.9c0 12.2 9.9 22.1 22.1 22.1c4.4 0 8.6-1.3 12.3-3.7L320 403.2 477.6 508.3c3.6 2.4 7.9 3.7 12.3 3.7c12.2 0 22.1-9.9 22.1-22.1l0-.7-32-25.3 0 7.6L328.9 370.7c-5.4-3.6-12.4-3.6-17.7 0L160 471.4zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default BookmarkSlash;
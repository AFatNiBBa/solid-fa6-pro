
import { Icon } from "../../index";

/**
 * A component that renders the `h6` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h6?s=regular h6}
 * @preview ![h6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/h6.svg)
 */
const H6: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88L0 248 0 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-152 224 0 0 152c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136L48 224 48 88zM519 69.3c-10.3-8.3-25.5-6.6-33.7 3.7l-98 122.5C364.4 224 352 259.5 352 296l.2 0c-.1 2.6-.2 5.3-.2 8c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144c-6.8 0-13.4 .5-20 1.4L522.7 103c8.3-10.4 6.6-25.5-3.8-33.7zM496 208a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default H6;
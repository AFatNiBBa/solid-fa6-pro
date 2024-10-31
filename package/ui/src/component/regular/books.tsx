
import { Icon } from "../../index";

/**
 * A component that renders the `books` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=regular books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 416l0 48 64 0 0-48-64 0zm88 89.6c-7.1 4.1-15.3 6.4-24 6.4l-64 0c-26.5 0-48-21.5-48-48l0-48 0-24 0-24L0 144l0-24L0 96 0 48C0 21.5 21.5 0 48 0l64 0c8.7 0 16.9 2.3 24 6.4C143.1 2.3 151.3 0 160 0l64 0c20.6 0 38.1 12.9 45 31.1c5.6-6.1 12.9-10.7 21.4-13L349.9 1.6c24.7-6.8 50.1 8.3 56.7 33.8l18 69.2 6 23.2 61.8 238.3 6 23.2 11.9 46c6.6 25.5-8 51.7-32.7 58.5l-59.6 16.5c-24.7 6.8-50.1-8.3-56.7-33.8l-18-69.2-6-23.2L275.6 145.9 272 132.2l0 11.8 0 224 0 24 0 24 0 48c0 26.5-21.5 48-48 48l-64 0c-8.7 0-16.9-2.3-24-6.4zM160 464l64 0 0-48-64 0 0 48zM112 48L48 48l0 48 64 0 0-48zm0 96l-64 0 0 224 64 0 0-224zm48-48l64 0 0-48-64 0 0 48zm64 272l0-224-64 0 0 224 64 0zm216.1-12.3l-55.8-215-56.5 15.6 55.8 215 56.5-15.6zm-44.4 62.1l11.9 45.7L464 447.9c0-.1 0-.2 0-.3l0-.1-11.7-45.2-56.5 15.6zm-79.9-308l56.5-15.6L360.4 48.5 304 64.1c0 .1 0 .2 0 .4l11.7 45.2z" />
    </Icon>
);

export default Books;
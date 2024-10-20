
import { Icon } from "../../index";

/**
 * A component that renders the `keynote` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=regular keynote}
 * @preview ![keynote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/keynote.svg)
 */
const Keynote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M198.4 72L184 72c-22.1 0-40 17.9-40 40l0 48 278.3 0c16.1 0 31 8 39.9 21.4l41.7 62.5c5.3 7.9 8.1 17.1 8.1 26.6l0 49.5c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32l0-49.5c0-9.5 2.8-18.7 8.1-26.6l41.7-62.5C58.7 168 73.6 160 89.7 160l6.3 0 0-48c0-48.6 39.4-88 88-88l14.4 0C206.7 9.7 222.2 0 240 0l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0c-17.8 0-33.3-9.7-41.6-24zM48 304l416 0 0-33.5L422.3 208 89.7 208 48 270.5 48 304zm80 184c0-13.3 10.7-24 24-24l80 0 0-80 48 0 0 80 80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-104 0-104 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Keynote;
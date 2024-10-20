
import { Icon } from "../../index";

/**
 * A component that renders the `bong` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bong?s=regular bong}
 * @preview ![bong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bong.svg)
 */
const Bong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 208.5c0 23.3-12.4 43.2-29.9 54.4C92.3 276.9 74.5 296.7 63 320L321 320c-11.6-23.3-29.3-43.1-51.2-57.2c-17.4-11.2-29.9-31.1-29.9-54.4L240 48l-96 0 0 160.5zM288 48l0 160.5c0 5.7 3.1 10.9 7.9 14c11.2 7.2 21.5 15.5 30.9 24.8L366.1 208l-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l24 24 24 24c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7-43.3 43.3C374 314.1 384 347.9 384 384c0 39.4-11.9 76.1-32.2 106.5c-9.6 14.4-26.5 21.5-43.8 21.5L76.1 512c-17.3 0-34.2-7.1-43.8-21.5C11.9 460.1 0 423.4 0 384c0-67.8 35.1-127.3 88.1-161.5c4.8-3.1 7.9-8.3 7.9-14L96 48l-8 0C74.7 48 64 37.3 64 24S74.7 0 88 0l24 0L272 0l24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0z" />
    </Icon>
);

export default Bong;
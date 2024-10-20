
import { Icon } from "../../index";

/**
 * A component that renders the `head-side` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=regular head-side}
 * @preview ![head-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/head-side.svg)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 224c0-97.2 78.8-176 176-176l24 0c60.1 0 115.7 36.7 139.6 88.3c3.9 8.4 7.5 17 11.4 25.9l1.5 3.5c4.3 10.1 8.9 20.7 13.9 31.1c10.1 20.8 22.5 42 40.6 60.1l4.4 4.4c2.9 2.9 4.6 6.9 4.6 11c0 8.6-7 15.6-15.6 15.6L424 288c-13.3 0-24 10.7-24 24l0 72c0 8.8-7.2 16-16 16l-88 0c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 64 0c35.3 0 64-28.7 64-64l0-48 .4 0c35.1 0 63.6-28.5 63.6-63.6c0-16.9-6.7-33-18.6-45L489 223c-12.7-12.7-22.4-28.5-31.4-47.1c-4.5-9.3-8.7-18.9-13-29l-1.5-3.5c-3.8-8.9-7.8-18.2-12-27.3C399.4 47.6 326.8 0 248 0L224 0C100.3 0 0 100.3 0 224c0 53.6 18.9 102.9 50.3 141.5c8.9 11 13.7 22.4 13.7 33.1L64 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-89.4c0-24.9-10.9-46.8-24.5-63.4C62.8 304.8 48 266.2 48 224zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default HeadSide;
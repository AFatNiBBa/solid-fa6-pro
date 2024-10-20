
import { Icon } from "../../index";

/**
 * A component that renders the `share-all` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=light share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M373.2 59.8c-6.5-5.9-7-16.1-1.1-22.6s16.1-7 22.6-1.1L551.2 178.4c17.5 15.9 17.5 43.3 0 59.2L394.8 379.8c-6.5 5.9-16.7 5.5-22.6-1.1s-5.5-16.7 1.1-22.6L529.7 213.9c3.5-3.2 3.5-8.7 0-11.8L373.2 59.8zM256 160l-80 0C96.5 160 32 224.5 32 304c0 46.1 15.9 79.7 34 103.2c-1.3-7.1-2-14.8-2-23.2c0-70.7 57.3-128 128-128l64 0c0 0 0 0 0 0l8 0c13.3 0 24 10.7 24 24l0 8 0 16 0 48L448 208 288 64l0 48 0 16 0 8c0 13.3-10.7 24-24 24l-8 0zm0 160l0-16 0-16-32 0-32 0c-53 0-96 43-96 96c0 30.4 12.8 47.9 22.2 56.7c5.5 5.1 9.8 12 9.8 19.5c0 10.9-8.8 19.7-19.7 19.7c-2.8 0-5.6-.6-8.1-1.9C81.5 467.9 0 417.3 0 304c0-97.2 78.8-176 176-176l48 0 32 0 0-16 0-16 0-32c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2l0-32z" />
    </Icon>
);

export default ShareAll;
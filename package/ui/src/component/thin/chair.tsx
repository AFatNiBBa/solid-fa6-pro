
import { Icon } from "../../index";

/**
 * A component that renders the `chair` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=thin chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 16l0 240-16 0 0-240-24 0c-11.1 0-21.9 1.6-32 4.6L160 256l-16 0 0-229.2C106.2 44.8 80 83.3 80 128l0 128-16 0 0-128C64 57.3 121.3 0 192 0l64 0c70.7 0 128 57.3 128 128l0 128-16 0 0-128c0-44.7-26.2-83.2-64-101.2L304 256l-16 0 0-235.4c-10.1-3-20.9-4.6-32-4.6l-24 0zM33.7 312.8l-16 32c-2.5 5-2.2 10.9 .7 15.6s8.1 7.6 13.6 7.6l384 0c5.5 0 10.7-2.9 13.6-7.6s3.2-10.6 .7-15.6l-16-32c-2.7-5.4-8.2-8.8-14.3-8.8L48 304c-6.1 0-11.6 3.4-14.3 8.8zm-14.3-7.2C24.8 294.8 35.9 288 48 288l352 0c12.1 0 23.2 6.8 28.6 17.7l16 32c5 9.9 4.4 21.7-1.4 31.1s-16.1 15.2-27.2 15.2l-16 0 0 120c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-120L64 384l0 120c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-120-16 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32z" />
    </Icon>
);

export default Chair;
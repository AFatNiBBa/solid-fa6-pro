
import { Icon } from "../../index";

/**
 * A component that renders the `bell` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=solid bell}
 * @preview ![bell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bell.svg)
 */
const Bell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
    </Icon>
);

export default Bell;
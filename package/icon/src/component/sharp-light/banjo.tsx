
import { Icon } from "../../index";

/**
 * A component that renders the `banjo` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banjo?s=sharp-light banjo}
 * @preview ![banjo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/banjo.svg)
 */
const Banjo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M431 107l-33.4 7.4L405 81 446.7 44 468 65.3 431 107zM448 0L376 64l-14.1 63.5-63 63c-25.2-20.8-56.6-34.4-90.9-37.7l0-8.8 0-16-32 0 0 16 0 8.8c-34.4 3.2-65.8 16.9-90.9 37.7l-6.2-6.2L67.5 172.9 44.9 195.5l11.3 11.3 6.2 6.2C41.6 238.2 28 269.6 24.8 304L16 304 0 304l0 32 16 0 8.8 0c3.2 34.4 16.9 65.8 37.7 90.9l-6.2 6.2L44.9 444.5l22.6 22.6 11.3-11.3 6.2-6.2c25.2 20.8 56.6 34.4 90.9 37.7l0 8.8 0 16 32 0 0-16 0-8.8c34.4-3.2 65.8-16.9 90.9-37.7l6.2 6.2 11.3 11.3 22.6-22.6-11.3-11.3-6.2-6.2c20.8-25.2 34.4-56.6 37.7-90.9l8.8 0 16 0 0-32-16 0-8.8 0c-3.2-34.4-16.9-65.8-37.7-90.9l63-62.9L448 136l64-72L448 0zM192 184a136 136 0 1 1 0 272 136 136 0 1 1 0-272zM147.3 316.7L136 305.4 113.4 328l11.3 11.3 48 48L184 398.6 206.6 376l-11.3-11.3-48-48z" />
    </Icon>
);

export default Banjo;
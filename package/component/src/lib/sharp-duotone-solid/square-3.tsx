
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-3` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-3?s=sharp-duotone-solid square-3}
 * @preview ![square-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-3.svg)
 */
const Square_3: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 128 0 24 0 0 34.6-7.8 7.1-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6c0 46.5-37.7 84.2-84.2 84.2l-25.2 0c-32.2 0-61.6-18.2-76-47l-4.2-8.3 42.9-21.5 4.2 8.3c6.3 12.5 19.1 20.4 33 20.4l25.2 0c20 0 36.2-16.2 36.2-36.2c0-20.1-16.3-36.3-36.4-36.2l-51.5 .3-24.1 .1 0-34.7 7.8-7.1L218.3 176 152 176l-24 0 0-48z" />
        <path d="M304 128l-24 0-128 0-24 0 0 48 24 0 66.3 0-50.5 46.3-7.8 7.1 0 34.7 24.1-.1 51.5-.3c20.1-.1 36.4 16.1 36.4 36.2c0 20-16.2 36.2-36.2 36.2l-25.2 0c-14 0-26.8-7.9-33-20.4l-4.2-8.3-42.9 21.5 4.2 8.3c14.4 28.8 43.8 47 76 47l25.2 0c46.5 0 84.2-37.7 84.2-84.2c0-43.3-32.6-78.9-74.6-83.6l50.8-46.5 7.8-7.1 0-34.6z" />
    </Icon>
);

export default Square_3;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-3` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-3?s=sharp-duotone-solid circle-3}
 * @preview ![circle-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-3.svg)
 */
const Circle_3: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 128 0 24 0 0 34.6-7.8 7.1-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6c0 46.5-37.7 84.2-84.2 84.2l-25.2 0c-32.2 0-61.6-18.2-76-47c-1.4-2.8-2.8-5.5-4.2-8.3c14.3-7.2 28.6-14.3 42.9-21.5l4.2 8.3c6.3 12.5 19.1 20.4 33 20.4l25.2 0c20 0 36.2-16.2 36.2-36.2c0-20.1-16.3-36.3-36.4-36.2l-51.5 .3-24.1 .1c0-11.6 0-23.1 0-34.7c2.6-2.4 5.2-4.8 7.8-7.1c16.8-15.4 33.7-30.9 50.5-46.3L184 176l-24 0c0-16 0-32 0-48z" />
        <path d="M336 128l-24 0-128 0-24 0 0 48 24 0 66.3 0-50.5 46.3-7.8 7.1 0 34.7 24.1-.1 51.5-.3c20.1-.1 36.4 16.1 36.4 36.2c0 20-16.2 36.2-36.2 36.2l-25.2 0c-14 0-26.8-7.9-33-20.4l-4.2-8.3-42.9 21.5 4.2 8.3c14.4 28.8 43.8 47 76 47l25.2 0c46.5 0 84.2-37.7 84.2-84.2c0-43.3-32.6-78.9-74.6-83.6l50.8-46.5 7.8-7.1 0-34.6z" />
    </Icon>
);

export default Circle_3;
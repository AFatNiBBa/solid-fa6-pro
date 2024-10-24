
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baguette` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baguette?s=sharp-duotone-solid baguette}
 * @preview ![baguette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/baguette.svg)
 */
const Baguette: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384.1c0 24.4 7 49.1 21.5 70.9c24.7 37 65.3 57 106.6 57c24.4 0 49.1-7 70.9-21.5l384-256c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5L356.5 77.8c23.6 23.6 47.2 47.2 70.8 70.8c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6c-3.8-3.8-7.5-7.5-11.3-11.3L329.3 95.9c-29.4 19.6-58.7 39.1-88 58.7c24.7 24.7 49.4 49.4 74 74c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6l-11.3-11.3-78.6-78.6c-29.4 19.6-58.7 39.1-88 58.7c25.8 25.8 51.5 51.5 77.2 77.2c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6l-11.3-11.3c-27.3-27.3-54.5-54.5-81.8-81.8c-14 9.3-28 18.6-41.9 28C20 302.2 0 342.8 0 384.1z" />
        <path d="M356.5 77.8L329.3 95.9l75.4 75.4L416 182.6 438.6 160l-11.3-11.3L356.5 77.8zM126.1 231.4L98.9 249.5l81.8 81.8L192 342.6 214.6 320l-11.3-11.3-77.2-77.2zm115.2-76.8l-27.2 18.1 78.6 78.6L304 262.6 326.6 240l-11.3-11.3-74-74z" />
    </Icon>
);

export default Baguette;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=sharp-duotone-solid image}
 * @preview ![image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/image.svg)
 */
const Image: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l512 0 0 448L0 480 0 32zM64 144a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 230.9c0 3 0 6.1 0 9.1c0 2.7 0 5.3 0 8c0 8 0 16 0 24c8 0 16 0 24 0c24 0 48 0 72 0c8 0 16 0 24 0c10.7 0 21.3 0 32 0c8 0 16 0 24 0c61.3 0 122.7 0 184 0c8 0 16 0 24 0l0-24 0-8 0-7.7-4.5-6.3c-40-56-80-112-120-168c-6.5-9.1-13-18.2-19.5-27.3l-19.5 27.3c-29.4 41.2-58.8 82.4-88.3 123.6c-8.8-9.9-17.5-19.7-26.3-29.6c-6-6.7-12-13.5-17.9-20.2l-17.9 20.2c-21.3 24-42.7 48-64 72L64 374.9z" />
        <path d="M323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168z" />
    </Icon>
);

export default Image;
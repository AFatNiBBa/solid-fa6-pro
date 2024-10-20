
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=sharp-duotone-solid thumbs-down}
 * @preview ![thumbs-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/thumbs-down.svg)
 */
const ThumbsDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 102.3l0 25.7 0 64 0 96 0 23.1 18 14.4 7.9 6.4c34.2 27.3 54 68.7 54 112.4l0 35.7 96 0 0-35.7c0-38.1-9-75.1-25.8-108.3L464 336l48 0 0-96-16 0 0-80-24 0 0-72-24 0 0-56-48 0L280 32l-14.5 0-12.1 8.1-72 48L160 102.3z" />
        <path d="M0 384H128V96H0V384z" />
    </Icon>
);

export default ThumbsDown;
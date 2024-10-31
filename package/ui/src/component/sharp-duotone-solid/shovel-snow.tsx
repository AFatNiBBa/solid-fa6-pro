
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shovel-snow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel-snow?s=sharp-duotone-solid shovel-snow}
 * @preview ![shovel-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shovel-snow.svg)
 */
const ShovelSnow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M97.4 328L120 350.6l11.3-11.3 72-72L214.6 256c-7.5-7.5-15.1-15.1-22.6-22.6c-3.8 3.8-7.5 7.5-11.3 11.3c-24 24-48 48-72 72c-3.8 3.8-7.5 7.5-11.3 11.3zm64 64L184 414.6l11.3-11.3 72-72L278.6 320c-7.5-7.5-15.1-15.1-22.6-22.6c-3.8 3.8-7.5 7.5-11.3 11.3c-24 24-48 48-72 72c-3.8 3.8-7.5 7.5-11.3 11.3zM255 223c11.3 11.3 22.6 22.6 33.9 33.9l89.8-89.8c10.9 5.7 23.3 8.8 36.4 8.8c21 0 41.1-8.3 56-23.2l6.9-6.9L512 112 478.1 78.1 433.9 33.9 400 0 366.1 33.9l-6.9 6.9c-14.9 14.9-23.2 35-23.2 56c0 13.1 3.2 25.5 8.8 36.4L255 223zM384 96.8c0-8.3 3.3-16.2 9.1-22.1l6.9-6.9L444.1 112l-6.9 6.9c-5.9 5.9-13.8 9.1-22.1 9.1C398 128 384 114 384 96.8z" />
        <path d="M0 304L192 160 352 320 208 512 0 304zm203.3-36.7L214.6 256 192 233.4l-11.3 11.3-72 72L97.4 328 120 350.6l11.3-11.3 72-72zm64 64L278.6 320 256 297.4l-11.3 11.3-72 72L161.4 392 184 414.6l11.3-11.3 72-72z" />
    </Icon>
);

export default ShovelSnow;
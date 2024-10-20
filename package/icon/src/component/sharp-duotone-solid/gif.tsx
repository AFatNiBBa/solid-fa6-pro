
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gif` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=sharp-duotone-solid gif}
 * @preview ![gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gif.svg)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l576 0 0 448L0 480 0 32zM80 256c0 53 43 96 96 96c19.6 0 37.5-6.1 52.8-15.8l11.2-7.1 0-13.2 0-35.9 0-24-48 0 0 24 0 21.1c-5.3 1.9-10.6 2.9-16 2.9c-26.5 0-48-21.5-48-48s21.5-48 48-48c12.3 0 23.5 4.6 32 12.2l32-35.8c-17-15.2-39.4-24.5-64-24.5c-53 0-96 43-96 96zm192-96l0 24 0 144 0 24 48 0 0-24 0-144 0-24-48 0zm80 0l0 24 0 80 0 64 0 24 48 0 0-24 0-40 40 0 24 0 0-48-24 0-40 0 0-32 64 0 24 0 0-48-24 0-88 0-24 0z" />
        <path d="M128 256c0-26.5 21.5-48 48-48c12.3 0 23.5 4.6 32 12.2l32-35.8c-17-15.2-39.4-24.5-64-24.5c-53 0-96 43-96 96s43 96 96 96c19.6 0 37.5-6.1 52.8-15.8l11.2-7.1 0-13.2 0-35.9 0-24-48 0 0 24 0 21.1c-5.3 1.9-10.6 2.9-16 2.9c-26.5 0-48-21.5-48-48zm192-72l0-24-48 0 0 24 0 144 0 24 48 0 0-24 0-144zm56-24l-24 0 0 24 0 80 0 64 0 24 48 0 0-24 0-40 40 0 24 0 0-48-24 0-40 0 0-32 64 0 24 0 0-48-24 0-88 0z" />
    </Icon>
);

export default Gif;
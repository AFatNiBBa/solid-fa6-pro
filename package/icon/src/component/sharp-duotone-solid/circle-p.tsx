
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=sharp-duotone-solid circle-p}
 * @preview ![circle-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-p.svg)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24zm48 48l0 88 68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0z" />
        <path d="M160 128l24 0 92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24zm48 136l68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0 0 88z" />
    </Icon>
);

export default CircleP;
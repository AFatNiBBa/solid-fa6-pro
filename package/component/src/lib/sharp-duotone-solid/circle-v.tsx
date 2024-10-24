
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=sharp-duotone-solid circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128.1 144l52.4 0L256 316.2 331.5 144l52.4 0L278 385.6 271.7 400l-31.4 0c-2.1-4.8-4.2-9.6-6.3-14.4C198.7 305.1 163.4 224.5 128.1 144z" />
        <path d="M331.5 144l52.4 0L278 385.6 271.7 400l-31.4 0L234 385.6 128.1 144l52.4 0L256 316.2 331.5 144z" />
    </Icon>
);

export default CircleV;
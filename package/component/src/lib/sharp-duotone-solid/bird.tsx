
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bird` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=sharp-duotone-solid bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M162.1 407.4c18.7 5.4 38.5 8.4 58.9 8.6l50.2 94.8 .7 1.2-54.3 0L162.1 407.4zm99 5.6c16.4-2.7 32.2-7.3 47.2-13.4l58.9 111.2 .7 1.2-54.3 0-52.4-99.1zm186.3-328L512 128l-64 42.7L448 96c0-3.8-.2-7.4-.6-11.1z" />
        <path d="M0 160l0 32C0 315.7 100.3 416 224 416s224-100.3 224-224l0-96c0-53-43-96-96-96s-96 43-96 96l0 64L0 160zM352 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Bird;
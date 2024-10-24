
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=sharp-duotone-solid flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm100.7-27.3c42.7-42.7 85.3-85.3 128-128l22.6 22.6c-42.7 42.7-85.3 85.3-128 128l-22.6-22.6zm48 112l192-192 22.6 22.6c-64 64-128 128-192 192c-7.5-7.5-15.1-15.1-22.6-22.6zm112 48l128-128 22.6 22.6c-42.7 42.7-85.3 85.3-128 128c-7.5-7.5-15.1-15.1-22.6-22.6z" />
        <path d="M251.3 123.3l-128 128-22.6-22.6 128-128 22.6 22.6zm112 48l-192 192-22.6-22.6 192-192 22.6 22.6zm-80 240l-22.6-22.6 128-128 22.6 22.6-128 128z" />
    </Icon>
);

export default Flatbread;
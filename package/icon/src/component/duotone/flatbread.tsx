
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=duotone flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96-16c0-4.1 1.6-8.2 4.7-11.3l128-128c3.1-3.1 7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7c6.2 6.2 6.2 16.4 0 22.6l-128 128c-6.2 6.2-16.4 6.2-22.6 0c-3.1-3.1-4.7-7.2-4.7-11.3zm52.7 100.7l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm112 48l128-128c6.2-6.2 16.4-6.2 22.6 0c3.1 3.1 4.7 7.2 4.7 11.3s-1.6 8.2-4.7 11.3l-128 128c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7c-6.2-6.2-6.2-16.4 0-22.6z" />
        <path d="M251.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-128 128c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0zm112 48c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0zm48 134.6l-128 128c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default Flatbread;
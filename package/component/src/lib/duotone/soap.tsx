
import { Icon, generic } from "../../index";

/**
 * A component that renders the `soap` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=duotone soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm96 144a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM352 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M385.6 262.1C404.3 244.5 416 219.6 416 192c53 0 96 43 96 96l0 128c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 288c0-53 43-96 96-96l128 0c0 24.6 9.2 47 24.4 64L160 256c-53 0-96 43-96 96s43 96 96 96l192 0c53 0 96-43 96-96c0-41.2-25.9-76.3-62.4-89.9zM320 288l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l160 0z" />
    </Icon>
);

export default Soap;
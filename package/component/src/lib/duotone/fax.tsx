
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fax` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=duotone fax}
 * @preview ![fax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fax.svg)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 64l0 128 352 0 0-101.5c0-17-6.7-33.3-18.7-45.3L434.7 18.7C422.7 6.7 406.5 0 389.5 0L192 0c-35.3 0-64 28.7-64 64zm96 224a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM352 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M32 128c-17.7 0-32 14.3-32 32L0 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32l-32 0zm448 64l-352 0 0 288c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Fax;
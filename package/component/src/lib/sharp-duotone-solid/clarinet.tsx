
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clarinet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clarinet?s=sharp-duotone-solid clarinet}
 * @preview ![clarinet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clarinet.svg)
 */
const Clarinet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 229.2L0 240l0 64 0 10.8 10.1 4 80 32 2.9 1.1 3.1 0 475.2 0 44 29.3L640 397.9l0-29.9 0-192 0-29.9-24.9 16.6-44 29.3c-30.4 0-60.8 0-91.2 0c-10.7 0-21.3 0-32 0c-21.3 0-42.7 0-64 0c-10.7 0-21.3 0-32 0c-21.3 0-42.7 0-64 0c-10.7 0-21.3 0-32 0L96 192l-3.1 0-2.9 1.1-80 32L0 229.2zM296 272a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M240 128l-16 0 0 32 16 0 16 0 0 32 32 0 0-32 64 0 0 32 32 0 0-32 64 0 0 32 32 0 0-32 16 0 16 0 0-32-16 0-32 0-96 0-96 0-32 0zm32 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Clarinet;
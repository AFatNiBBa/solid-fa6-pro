
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flute` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=duotone flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208l0 96c0 26.5 21.5 48 48 48l48 0 0-192-48 0c-26.5 0-48 21.5-48 48zm128-48l0 192 464 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-464 0zm216 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M128 160l-32 0 0 192 32 0 0-192zM320 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm96 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Flute;
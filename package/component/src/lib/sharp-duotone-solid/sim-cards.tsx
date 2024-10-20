
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=sharp-duotone-solid sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 0l32 0L320 0l13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 256 0 32-32 0-288 0-32 0 0-32L96 32 96 0zm64 144l0 48 0 32 0 48 0 32 0 48 48 0 32 0 64 0 32 0 48 0 0-48 0-32 0-48 0-32 0-48-48 0-32 0-64 0-32 0-48 0z" />
        <path d="M48 120l0-24L0 96l0 24L0 488l0 24 24 0 336 0 24 0 0-48-24 0L48 464l0-344zm112 24l0 48 48 0 0-48-48 0zm0 128l64 0 96 0 64 0 0-48-64 0-96 0-64 0 0 48zM384 144l-48 0 0 48 48 0 0-48zm-144 0l0 48 64 0 0-48-64 0zm96 160l0 48 48 0 0-48-48 0zm-32 0l-64 0 0 48 64 0 0-48zm-96 0l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default SimCards;
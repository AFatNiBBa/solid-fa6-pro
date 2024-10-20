
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=sharp-duotone-solid sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L32 0 256 0l13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 352 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM64 192l0 64 0 32 0 64 0 32 0 64 64 0 32 0 64 0 32 0 64 0 0-64 0-32 0-64 0-32 0-64-64 0-32 0-64 0-32 0-64 0z" />
        <path d="M128 192l-64 0 0 64 64 0 0-64zM64 288l0 64 80 0 96 0 80 0 0-64-80 0-96 0-80 0zm256-32l0-64-64 0 0 64 64 0zm-96-64l-64 0 0 64 64 0 0-64zm96 192l-64 0 0 64 64 0 0-64zm-96 64l0-64-64 0 0 64 64 0zm-96 0l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default SimCard;
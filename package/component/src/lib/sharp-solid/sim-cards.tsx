
import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=sharp-solid sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0L96 0l0 32 0 352 0 32 32 0 288 0 32 0 0-32 0-256 0-13.3-9.4-9.4-96-96L333.3 0 320 0 128 0zm80 144l0 48-48 0 0-48 48 0zm-48 80l64 0 96 0 64 0 0 48-64 0-96 0-64 0 0-48zm224-32l-48 0 0-48 48 0 0 48zm-80-48l0 48-64 0 0-48 64 0zm80 160l0 48-48 0 0-48 48 0zm-80 48l-64 0 0-48 64 0 0 48zm-96 0l-48 0 0-48 48 0 0 48zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 336 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default SimCards;
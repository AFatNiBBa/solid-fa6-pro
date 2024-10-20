
import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=solid sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-210.7c0-17-6.7-33.3-18.7-45.3L352 18.7C340 6.7 323.7 0 306.7 0L160 0zm48 144l0 48-48 0 0-16c0-17.7 14.3-32 32-32l16 0zm-48 80l64 0 96 0 64 0 0 48-64 0-96 0-64 0 0-48zm224-32l-48 0 0-48 16 0c17.7 0 32 14.3 32 32l0 16zm-80-48l0 48-64 0 0-48 64 0zm80 160l0 16c0 17.7-14.3 32-32 32l-16 0 0-48 48 0zm-80 48l-64 0 0-48 64 0 0 48zm-96 0l-16 0c-17.7 0-32-14.3-32-32l0-16 48 0 0 48zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0c-48.6 0-88-39.4-88-88l0-256z" />
    </Icon>
);

export default SimCards;
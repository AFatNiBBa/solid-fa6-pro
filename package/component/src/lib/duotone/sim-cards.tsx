
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=duotone sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 64c0-35.3 28.7-64 64-64L306.7 0c17 0 33.3 6.7 45.3 18.7L429.3 96c12 12 18.7 28.3 18.7 45.3L448 352c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64L96 64zm64 112l0 16 0 32 0 48 0 32 0 16c0 17.7 14.3 32 32 32l16 0 32 0 64 0 32 0 16 0c17.7 0 32-14.3 32-32l0-16 0-32 0-48 0-32 0-16c0-17.7-14.3-32-32-32l-16 0-32 0-64 0-32 0-16 0c-17.7 0-32 14.3-32 32z" />
        <path d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0c-48.6 0-88-39.4-88-88l0-256zm144 24c-17.7 0-32 14.3-32 32l0 16 48 0 0-48-16 0zM160 272l64 0 96 0 64 0 0-48-64 0-96 0-64 0 0 48zm224-96c0-17.7-14.3-32-32-32l-16 0 0 48 48 0 0-16zM240 144l0 48 64 0 0-48-64 0zm96 160l0 48 16 0c17.7 0 32-14.3 32-32l0-16-48 0zm-32 0l-64 0 0 48 64 0 0-48zm-96 0l-48 0 0 16c0 17.7 14.3 32 32 32l16 0 0-48z" />
    </Icon>
);

export default SimCards;

import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=regular sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 352c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-213.5c0-4.2-1.7-8.3-4.7-11.3L320.8 52.7c-3-3-7.1-4.7-11.3-4.7L160 48c-8.8 0-16 7.2-16 16l0 288zM429.3 93.3c12 12 18.7 28.3 18.7 45.3L448 352c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64L96 64c0-35.3 28.7-64 64-64L309.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5zM24 96c13.3 0 24 10.7 24 24l0 256c0 48.6 39.4 88 88 88l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0C60.9 512 0 451.1 0 376L0 120c0-13.3 10.7-24 24-24zm184 80l64 0 0 64-16 0-80 0 0-32c0-17.7 14.3-32 32-32zM176 304l0-32 64 0 0 64-32 0c-17.7 0-32-14.3-32-32zm192 0c0 17.7-14.3 32-32 32l-64 0 0-64 16 0 80 0 0 32zm0-96l0 32-64 0 0-64 32 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default SimCards;
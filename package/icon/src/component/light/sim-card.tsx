
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=light sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-293.5c0-8.5-3.4-16.6-9.4-22.6L252.1 41.4c-6-6-14.1-9.4-22.6-9.4L64 32C46.3 32 32 46.3 32 64zM0 448L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64zM64 280l0-40c0-26.5 21.5-48 48-48l48 0 16 0 16 0 40 0 40 0c26.5 0 48 21.5 48 48l0 40 0 80 0 40c0 26.5-21.5 48-48 48l-48 0-16 0-16 0-80 0c-26.5 0-48-21.5-48-48l0-40 0-80zM96 400c0 8.8 7.2 16 16 16l80 0 0-40-40 0-56 0 0 24zm176 16c8.8 0 16-7.2 16-16l0-24-64 0 0 40 48 0zm-64-72l80 0 0-48-56 0-56 0-80 0 0 48 56 0 56 0zm80-104c0-8.8-7.2-16-16-16l-40 0-40 0 0 40 40 0 56 0 0-24zM160 224l-48 0c-8.8 0-16 7.2-16 16l0 24 64 0 0-40z" />
    </Icon>
);

export default SimCard;
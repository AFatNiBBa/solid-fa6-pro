
import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=thin sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 368L96 64c0-26.5 21.5-48 48-48l149.5 0c12.7 0 24.9 5.1 33.9 14.1l90.5 90.5c9 9 14.1 21.2 14.1 33.9L432 368c0 26.5-21.5 48-48 48l-240 0c-26.5 0-48-21.5-48-48zM80 64l0 304c0 35.3 28.7 64 64 64l240 0c35.3 0 64-28.7 64-64l0-213.5c0-17-6.7-33.3-18.7-45.3L338.7 18.7C326.7 6.7 310.5 0 293.5 0L144 0C108.7 0 80 28.7 80 64zM48 82C20.4 89.1 0 114.2 0 144L0 448c0 35.3 28.7 64 64 64l240 0c29.8 0 54.9-20.4 62-48l-16.7 0c-6.6 18.6-24.4 32-45.3 32L64 496c-26.5 0-48-21.5-48-48l0-304c0-20.9 13.4-38.7 32-45.3L48 82zM168 184c0-13.3 10.7-24 24-24l24 0 0 48-48 0 0-24zm128 24l-64 0 0-48 64 0 0 48zm64-24l0 24-48 0 0-48 24 0c13.3 0 24 10.7 24 24zm-56 40l56 0 0 48-56 0-80 0-56 0 0-48 56 0 80 0zm32 112l-24 0 0-48 48 0 0 24c0 13.3-10.7 24-24 24zM232 288l64 0 0 48-64 0 0-48zm-64 24l0-24 48 0 0 48-24 0c-13.3 0-24-10.7-24-24zm24-168c-22.1 0-40 17.9-40 40l0 32 0 64 0 32c0 22.1 17.9 40 40 40l32 0 80 0 32 0c22.1 0 40-17.9 40-40l0-32 0-64 0-32c0-22.1-17.9-40-40-40l-32 0-80 0-32 0z" />
    </Icon>
);

export default SimCards;
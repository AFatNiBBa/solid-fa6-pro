
import { Icon } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=regular person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 92c0-6.6 5.4-12 12-12s12 5.4 12 12l0 92-16 0c-4.4 0-8-3.6-8-8l0-84zm72 92l0-56 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-57.2 0c-5.6-27.4-29.8-48-58.8-48c-33.1 0-60 26.9-60 60l0 84c0 30.9 25.1 56 56 56l40 0 54 0c12 0 22.2 8.9 23.8 20.8l10.4 78.3C273.8 471.1 284 480 296 480l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-43 0-7.7-57.5C304.6 338.7 274.1 312 238 312l-30 0zM48 152c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 328c0 66.3 53.7 120 120 120l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.8 0-72-32.2-72-72l0-176z" />
    </Icon>
);

export default PersonSeat;
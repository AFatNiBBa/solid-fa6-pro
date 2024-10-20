
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-walking-luggage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking-luggage?s=sharp-duotone-solid person-walking-luggage}
 * @preview ![person-walking-luggage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-walking-luggage.svg)
 */
const PersonWalkingLuggage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 447.9l110.9 64 23.1-40 5.6-9.5 98.2-166.3-27.6-16.3-29.8 50.5L128 281.6 32 447.9z" />
        <path d="M480 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM366.3 128.6l-10-2-9.3 4.1-72 32-12.9 5.7-4.5 13.4-16 48-10.1 30.4 60.7 20.2 10.1-30.4 11.5-34.6 36.7-16.3-17 63.6c-5.6 21.1-.1 43.6 14.7 59.7l70.9 77.4 22 80.5 8.4 30.9 61.7-16.8-8.4-30.9-24-88-2-7.5-5.2-5.7-52.3-57 18.4-62.4 13.7 27.4 4.8 9.5 9.5 4.8 48 24 28.6-57.2-38.5-19.2-35.2-70.5-7-14-15.3-3.1-80-16zM292.7 398l-43.4 43.4L226.7 464 272 509.3l22.6-22.6 48-48 4.6-4.6 2.4-6.1 15.7-39.3-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6l-25 62.4z" />
    </Icon>
);

export default PersonWalkingLuggage;
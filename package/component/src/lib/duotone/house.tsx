
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=duotone house}
 * @preview ![house](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house.svg)
 */
const House: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5c74.7-65.3 149.3-130.6 224-196L512.1 270.6l.4 201.3c0 22.1-17.9 40.1-40 40.1L392 512c-22.1 0-40-17.9-40-40l0-88.3c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 88.3c0 22.1-17.9 40-40 40l-79.9 0c-22.1 0-40-17.9-40-40L64 270.5z" />
        <path d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2l256-224z" />
    </Icon>
);

export default House;

import { Icon } from "../../index";

/**
 * A component that renders the `person-digging` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-digging?s=sharp-solid person-digging}
 * @preview ![person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-digging.svg)
 */
const PersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM41.2 201.8l-22.2-9.2L.6 236.9l22.2 9.2 347.9 145L352 416l-64 0-32 96 320 0 0-48L448 288l-47.6 63.5-91.9-38.3L253.6 179.8l-5.1-12.5-12.6-5-80-32-22-8.8L119 140 62.5 210.7l-21.2-8.8zm17.1 90.1L49 328 1.3 512l66.1 0 34.2-131.9 58.4 25 0 74.9 0 32 64 0 0-32 0-96 0-21.1-19.4-8.3-112-48L58.4 291.9z" />
    </Icon>
);

export default PersonDigging;
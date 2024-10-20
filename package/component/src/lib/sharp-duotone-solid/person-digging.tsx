
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-digging` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-digging?s=sharp-duotone-solid person-digging}
 * @preview ![person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-digging.svg)
 */
const PersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.6 236.9l22.2 9.2 347.9 145L352 416l-64 0-32 96 320 0 0-48L448 288l-47.6 63.5c-30.6-12.8-61.2-25.5-91.9-38.3L62.5 210.7c-7.1-2.9-14.2-5.9-21.2-8.8l-22.2-9.2L.6 236.9z" />
        <path d="M304 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM133.8 121.5L119 140 62.5 210.7 308.5 313.2 253.6 179.8l-5.1-12.5-12.6-5-80-32-22-8.8zM92.6 306.6L58.4 291.9 49 328 1.3 512l66.1 0 34.2-131.9 58.4 25 0 74.9 0 32 64 0 0-32 0-96 0-21.1-19.4-8.3-112-48z" />
    </Icon>
);

export default PersonDigging;
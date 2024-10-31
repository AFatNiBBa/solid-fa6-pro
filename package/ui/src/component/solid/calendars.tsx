
import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=solid calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0c-17.7 0-32 14.3-32 32l0 32-48 0c-26.5 0-48 21.5-48 48l0 48 416 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-96 0 0-32c0-17.7-14.3-32-32-32zM96 192l0 176c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-176L96 192zm-48-8c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 392c0 66.3 53.7 120 120 120l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-272 0c-39.8 0-72-32.2-72-72l0-208z" />
    </Icon>
);

export default Calendars;
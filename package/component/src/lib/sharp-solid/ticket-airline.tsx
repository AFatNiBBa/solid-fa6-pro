
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-airline` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-airline?s=sharp-solid ticket-airline}
 * @preview ![ticket-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ticket-airline.svg)
 */
const TicketAirline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 64L0 64 0 448l640 0 0-144c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-144zM432 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-16 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-16 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM176 224l-32-96 56 0 56 96 46.9 0c16.1 0 31.5 6.4 42.8 17.7c7.9 7.9 7.9 20.7 0 28.5C334.4 281.6 319 288 302.9 288L256 288l-56 96-56 0 32-96-56 0L96 320l-32 0 16-64L64 192l32 0 24 32 56 0z" />
    </Icon>
);

export default TicketAirline;
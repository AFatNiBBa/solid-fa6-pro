
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket-airline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-airline?s=sharp-duotone-solid ticket-airline}
 * @preview ![ticket-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ticket-airline.svg)
 */
const TicketAirline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l640 0 0-144c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-144L0 64zM64 192l32 0 24 32 56 0-32-96 56 0 56 96 46.9 0c16.1 0 31.5 6.4 42.8 17.7c3.9 3.9 5.9 9.1 5.9 14.3s-2 10.3-5.9 14.3C334.4 281.6 319 288 302.9 288L256 288l-56 96-56 0 32-96-56 0L96 320l-32 0 16-64L64 192zm384-64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M144 128l32 96-56 0L96 192l-32 0 16 64L64 320l32 0 24-32 56 0-32 96 56 0 56-96 46.9 0c16.1 0 31.5-6.4 42.8-17.7c7.9-7.9 7.9-20.7 0-28.5C334.4 230.4 319 224 302.9 224L256 224l-56-96-56 0z" />
    </Icon>
);

export default TicketAirline;
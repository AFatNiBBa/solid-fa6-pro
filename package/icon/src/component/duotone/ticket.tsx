
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=duotone ticket}
 * @preview ![ticket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ticket.svg)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm96 32c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192zm32 0l0 192 320 0 0-192-320 0z" />
        <path d="M448 160l0 192-320 0 0-192 320 0zM128 128c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-320 0z" />
    </Icon>
);

export default Ticket;
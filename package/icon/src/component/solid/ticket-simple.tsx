
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=solid ticket-simple}
 * @preview ![ticket-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ticket-simple.svg)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6l0 64c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64l0-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192l0-64z" />
    </Icon>
);

export default TicketSimple;
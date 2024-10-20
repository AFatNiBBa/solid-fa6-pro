
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=light ticket-simple}
 * @preview ![ticket-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ticket-simple.svg)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 66c0 7.3-4.9 13.7-12 15.5c-20.7 5.3-36 24.1-36 46.5s15.3 41.2 36 46.5c7.1 1.8 12 8.2 12 15.5l0 66c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64l0-66c0-7.3 4.9-13.7 12-15.5c20.7-5.3 36-24.1 36-46.5s-15.3-41.2-36-46.5C4.9 207.7 0 201.3 0 194l0-66zM64 96c-17.7 0-32 14.3-32 32l0 54.7C60.2 195 80 223.2 80 256s-19.8 61-48 73.3L32 384c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-54.7c-28.2-12.3-48-40.5-48-73.3s19.8-61 48-73.3l0-54.7c0-17.7-14.3-32-32-32L64 96z" />
    </Icon>
);

export default TicketSimple;
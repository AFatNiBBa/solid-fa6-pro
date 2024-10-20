
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=thin ticket-simple}
 * @preview ![ticket-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ticket-simple.svg)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 72.6c0 4-2.9 7.4-6.9 7.9C545.9 211.8 528 231.8 528 256s17.9 44.2 41.1 47.5c3.9 .6 6.9 3.9 6.9 7.9l0 72.6c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64l0-72.6c0-4 2.9-7.4 6.9-7.9C30.1 300.2 48 280.2 48 256s-17.9-44.2-41.1-47.5c-3.9-.6-6.9-3.9-6.9-7.9L0 128zM64 80c-26.5 0-48 21.5-48 48l0 66c27.6 7.1 48 32.2 48 62s-20.4 54.9-48 62l0 66c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-66c-27.6-7.1-48-32.2-48-62s20.4-54.9 48-62l0-66c0-26.5-21.5-48-48-48L64 80z" />
    </Icon>
);

export default TicketSimple;
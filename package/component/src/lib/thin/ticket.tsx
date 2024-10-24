
import { Icon } from "../../index";

/**
 * A component that renders the `ticket` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=thin ticket}
 * @preview ![ticket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ticket.svg)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C28.7 64 0 92.7 0 128l0 72.6c0 4 2.9 7.4 6.9 7.9C30.1 211.8 48 231.8 48 256s-17.9 44.2-41.1 47.5c-3.9 .6-6.9 3.9-6.9 7.9L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-72.6c0-4-2.9-7.4-6.9-7.9C545.9 300.2 528 280.2 528 256s17.9-44.2 41.1-47.5c3.9-.6 6.9-3.9 6.9-7.9l0-72.6c0-35.3-28.7-64-64-64L64 64zM16 128c0-26.5 21.5-48 48-48l448 0c26.5 0 48 21.5 48 48l0 66c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62l0 66c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-66c27.6-7.1 48-32.2 48-62s-20.4-54.9-48-62l0-66zm144 48l256 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm-32 16l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-256 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Ticket;

import { Icon } from "../../index";

/**
 * A component that renders the `ticket` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=regular ticket}
 * @preview ![ticket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ticket.svg)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C28.7 64 0 92.7 0 128l0 60.1c0 10.2 6.4 19.2 16 22.6c18.7 6.6 32 24.4 32 45.3s-13.3 38.7-32 45.3c-9.6 3.4-16 12.5-16 22.6L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-60.1c0-10.2-6.4-19.2-16-22.6c-18.7-6.6-32-24.4-32-45.3s13.3-38.7 32-45.3c9.6-3.4 16-12.5 16-22.6l0-60.1c0-35.3-28.7-64-64-64L64 64zM48 128c0-8.8 7.2-16 16-16l448 0c8.8 0 16 7.2 16 16l0 44.9c-28.7 16.6-48 47.6-48 83.1s19.3 66.6 48 83.1l0 44.9c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-44.9c28.7-16.6 48-47.6 48-83.1s-19.3-66.6-48-83.1L48 128zM400 304l-224 0 0-96 224 0 0 96zM128 192l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-256 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Ticket;
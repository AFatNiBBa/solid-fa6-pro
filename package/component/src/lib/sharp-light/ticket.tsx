
import { Icon } from "../../index";

/**
 * A component that renders the `ticket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=sharp-light ticket}
 * @preview ![ticket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ticket.svg)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64L0 96l0 80 0 32c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 32 0 80 0 32 32 0 512 0 32 0 0-32 0-80 0-32c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-32 0-80 0-32-32 0L32 64 0 64zM80 256c0-32.8-19.7-61-48-73.3L32 96l512 0 0 86.7c-28.3 12.3-48 40.5-48 73.3s19.7 61 48 73.3l0 86.7L32 416l0-86.7C60.3 317 80 288.8 80 256zm80-64l256 0 0 128-256 0 0-128zm-32-32l0 32 0 128 0 32 32 0 256 0 32 0 0-32 0-128 0-32-32 0-256 0-32 0z" />
    </Icon>
);

export default Ticket;

import { Icon } from "../../index";

/**
 * A component that renders the `ticket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=sharp-regular ticket}
 * @preview ![ticket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ticket.svg)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64l0 48 0 48 0 48c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 48 0 48 0 48 48 0 480 0 48 0 0-48 0-48 0-48c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-48 0-48 0-48-48 0L48 64 0 64zM96 256c0-35.5-19.3-66.6-48-83.2L48 112l480 0 0 60.8c-28.7 16.6-48 47.6-48 83.2s19.3 66.6 48 83.2l0 60.8L48 400l0-60.8c28.7-16.6 48-47.6 48-83.2zm80-48l224 0 0 96-224 0 0-96zm-48-48l0 48 0 96 0 48 48 0 224 0 48 0 0-48 0-96 0-48-48 0-224 0-48 0z" />
    </Icon>
);

export default Ticket;
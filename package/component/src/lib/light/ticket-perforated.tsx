
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-perforated` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-perforated?s=light ticket-perforated}
 * @preview ![ticket-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ticket-perforated.svg)
 */
const TicketPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 128c0-17.7 14.3-32 32-32l512 0c17.7 0 32 14.3 32 32l0 49.6c-36.5 7.4-64 39.7-64 78.4s27.5 71 64 78.4l0 49.6c0 17.7-14.3 32-32 32L64 416c-17.7 0-32-14.3-32-32l0-256zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-66.4c0-8-8-13.6-16-13.6c-26.5 0-48-21.5-48-48s21.5-48 48-48c8 0 16-5.6 16-13.6l0-66.4c0-35.3-28.7-64-64-64L64 64zm416 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default TicketPerforated;
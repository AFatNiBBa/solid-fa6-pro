
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-perforated` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-perforated?s=regular ticket-perforated}
 * @preview ![ticket-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ticket-perforated.svg)
 */
const TicketPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 128c0-8.8 7.2-16 16-16l512 0c8.8 0 16 7.2 16 16l0 35c-41.4 10.7-72 48.2-72 93s30.6 82.3 72 93l0 35c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-256zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-61.3c0-11.2-12.8-18.7-24-18.7c-26.5 0-48-21.5-48-48s21.5-48 48-48c11.2 0 24-7.5 24-18.7l0-61.3c0-35.3-28.7-64-64-64L64 64zm384 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default TicketPerforated;
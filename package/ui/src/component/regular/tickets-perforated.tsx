
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-perforated` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-perforated?s=regular tickets-perforated}
 * @preview ![tickets-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tickets-perforated.svg)
 */
const TicketsPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 80l416 0c8.8 0 16 7.2 16 16l0 38.2c-24 15.7-40 42.8-40 73.8s16 58.1 40 73.8l0 38.2c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zM96 96l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-56c0-8.8-7.4-15.7-15.6-19.1C610.1 238.8 600 224.6 600 208s10.1-30.8 24.4-36.9c8.1-3.4 15.6-10.3 15.6-19.1l0-56c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zm400 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z" />
    </Icon>
);

export default TicketsPerforated;
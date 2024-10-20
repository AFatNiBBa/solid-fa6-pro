
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=regular tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 38.2c-24 15.7-40 42.8-40 73.8s16 58.1 40 73.8l0 38.2c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-38.2c24-15.7 40-42.8 40-73.8s-16-58.1-40-73.8L144 96zM96 96l0 56c0 8.8 7.4 15.7 15.6 19.1c14.4 6.1 24.4 20.3 24.4 36.9s-10.1 30.8-24.4 36.9C103.4 248.3 96 255.2 96 264l0 56c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-56c0-8.8-7.4-15.7-15.6-19.1C610.1 238.8 600 224.6 600 208s10.1-30.8 24.4-36.9c8.1-3.4 15.6-10.3 15.6-19.1l0-56c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z" />
    </Icon>
);

export default TicketsSimple;
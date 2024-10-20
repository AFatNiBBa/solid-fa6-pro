
import { Icon } from "../../index";

/**
 * A component that renders the `tickets` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets?s=regular tickets}
 * @preview ![tickets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tickets.svg)
 */
const Tickets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 80c-8.8 0-16 7.2-16 16l0 38.2c24 15.7 40 42.8 40 73.8s-16 58.1-40 73.8l0 38.2c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16l0-38.2c-24-15.7-40-42.8-40-73.8s16-58.1 40-73.8L592 96c0-8.8-7.2-16-16-16L160 80zm0-48l416 0c35.3 0 64 28.7 64 64l0 56c0 8.8-7.4 15.7-15.6 19.1C610.1 177.2 600 191.4 600 208s10.1 30.8 24.4 36.9c8.1 3.4 15.6 10.3 15.6 19.1l0 56c0 35.3-28.7 64-64 64l-416 0c-35.3 0-64-28.7-64-64l0-56c0-8.8 7.4-15.7 15.6-19.1c14.4-6.1 24.4-20.3 24.4-36.9s-10.1-30.8-24.4-36.9C103.4 167.7 96 160.8 96 152l0-56c0-35.3 28.7-64 64-64zM24 96c13.3 0 24 10.7 24 24l0 240c0 39.8 32.2 72 72 72l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-400 0C53.7 480 0 426.3 0 360L0 120c0-13.3 10.7-24 24-24zM464 240l0-64-192 0 0 64 192 0zM224 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32l0-96z" />
    </Icon>
);

export default Tickets;

import { Icon } from "../../index";

/**
 * A component that renders the `bus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus?s=regular bus}
 * @preview ![bus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bus.svg)
 */
const Bus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M363.7 96l97.5 0C445.4 78.9 399.2 48 288 48C185.8 48 133.8 78.3 115.5 96l96.8 0c5.5-9.6 15.9-16 27.7-16l96 0c11.8 0 22.2 6.4 27.7 16zM464 144l-152 0 0 80 152 0 0-80zm-352 0l0 80 152 0 0-80-152 0zm0 128l0 104c0 13.3 10.7 24 24 24l228.2 0 75.8 0c13.3 0 24-10.7 24-24l0-104-352 0zM74.2 70C99.9 38.7 167.8 0 288 0C416.6 0 478 38.6 502.4 70.6c7.5 9.8 9.6 20.9 9.6 29.9l0 27.6c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 120c0 25-12.7 47-32 59.9l0 52.1c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-67.8 0L144 448l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-52.1C76.7 423 64 401 64 376l0-120c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l0-27.6C64 91.6 66 80 74.2 70zM176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Bus;
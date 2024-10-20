
import { Icon } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=regular train-tunnel}
 * @preview ![train-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/train-tunnel.svg)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208l0 232c0 13.3 10.7 24 24 24s24-10.7 24-24l0-232C512 114.6 397.4 0 256 0S0 114.6 0 256L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-232zm304-48l0 48-192 0 0-48c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32zM160 368l0-64 192 0 0 64c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32zm32-240c-44.2 0-80 35.8-80 80l0 160c0 27.7 14.1 52.2 35.5 66.5L111 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 108.1 0 57 57c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-36.5-36.5C385.9 420.2 400 395.7 400 368l0-160c0-44.2-35.8-80-80-80l-128 0zm96 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default TrainTunnel;
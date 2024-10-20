
import { Icon } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=sharp-solid train-tunnel}
 * @preview ![train-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/train-tunnel.svg)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0C114.6 0 0 114.6 0 256L0 512l105.4 0 64-64L112 448l0-320 288 0 0 320-57.4 0 64 64L512 512l0-256C512 114.6 397.4 0 256 0zM361.4 512l-64-64-82.7 0-64 64 210.7 0zM288 384a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64-192l-192 0 0 128 192 0 0-128z" />
    </Icon>
);

export default TrainTunnel;
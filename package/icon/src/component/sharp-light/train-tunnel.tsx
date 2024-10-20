
import { Icon } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=sharp-light train-tunnel}
 * @preview ![train-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/train-tunnel.svg)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C132.3 32 32 132.3 32 256l0 240 0 16L0 512l0-16L0 256C0 114.6 114.6 0 256 0S512 114.6 512 256l0 240 0 16-32 0 0-16 0-240C480 132.3 379.7 32 256 32zM161.4 448L144 448l-32 0 0-32 0-256 0-32 32 0 224 0 32 0 0 32 0 256 0 32-32 0-17.4 0 52.7 52.7L414.6 512l-45.3 0-64-64-98.7 0-64 64-45.2 0s0 0 0 0l11.3-11.3L161.4 448zm157.3-32l49.4 0 0-128-224 0 0 128 49.4 0 6.6 0 112 0 6.6 0zM144 256l224 0 0-96-224 0 0 96zm112 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TrainTunnel;
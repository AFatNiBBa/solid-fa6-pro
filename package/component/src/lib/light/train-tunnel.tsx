
import { Icon } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=light train-tunnel}
 * @preview ![train-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/train-tunnel.svg)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224l0 240c0 8.8 7.2 16 16 16s16-7.2 16-16l0-240C512 114.6 397.4 0 256 0S0 114.6 0 256L0 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-240zm336-48l0 48-224 0 0-48c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48zM144 368l0-80 224 0 0 80c0 26.5-21.5 48-48 48c0 0 0 0 0 0l-128 0s0 0 0 0c-26.5 0-48-21.5-48-48zm16 73.4l-43.3 43.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L198.6 448l114.7 0 59.3 59.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L352 441.4c28.3-12.3 48-40.5 48-73.4l0-160c0-44.2-35.8-80-80-80l-128 0c-44.2 0-80 35.8-80 80l0 160c0 32.8 19.8 61 48 73.4zM280 352a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default TrainTunnel;
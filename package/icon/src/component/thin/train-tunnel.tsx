
import { Icon } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=thin train-tunnel}
 * @preview ![train-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/train-tunnel.svg)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256l0 248c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 256C0 114.6 114.6 0 256 0S512 114.6 512 256l0 248c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-248C496 123.5 388.5 16 256 16zM192 144c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64l-128 0zm0-16l128 0c44.2 0 80 35.8 80 80l0 160c0 38.2-26.8 70.2-62.6 78.1l52.2 52.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L316.7 448l-121.4 0-61.7 61.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l52.2-52.2C138.8 438.2 112 406.2 112 368l0-160c0-44.2 35.8-80 80-80zm80 248a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM192 208c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-128 0zm-32 16c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-64z" />
    </Icon>
);

export default TrainTunnel;
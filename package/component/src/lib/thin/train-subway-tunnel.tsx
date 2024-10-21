
import { Icon } from "../../index";

/**
 * A component that renders the `train-subway-tunnel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway-tunnel?s=thin train-subway-tunnel}
 * @preview ![train-subway-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/train-subway-tunnel.svg)
 */
const TrainSubwayTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240l0 248c0 4.4 3.6 8 8 8s8-3.6 8-8l0-248C512 114.6 397.4 0 256 0S0 114.6 0 256L0 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-248zM192 144l128 0c35.3 0 64 28.7 64 64l0 160c0 35.3-28.7 64-64 64l-128 0c-35.3 0-64-28.7-64-64l0-160c0-35.3 28.7-64 64-64zm-80 64l0 160c0 38.2 26.8 70.2 62.6 78.1l-52.2 52.2c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L195.3 448l121.4 0 61.7 61.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-52.2-52.2c35.8-7.9 62.6-39.9 62.6-78.1l0-160c0-44.2-35.8-80-80-80l-128 0c-44.2 0-80 35.8-80 80zm64 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM248 208l0 96-56 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l56 0zm16 0l56 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-56 0 0-96zm-72-16c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z" />
    </Icon>
);

export default TrainSubwayTunnel;
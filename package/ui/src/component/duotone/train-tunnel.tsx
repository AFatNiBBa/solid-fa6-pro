
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=duotone train-tunnel}
 * @preview ![train-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/train-tunnel.svg)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 448c0 35.3 28.7 64 64 64l41.4 0 64.3-64.3C137.3 444.5 112 417.2 112 384l0-192c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64l0 192c0 1 0 2.1-.1 3.1s-.1 2-.2 3.1c-.2 2-.5 4-.9 6c-.8 3.9-1.9 7.7-3.3 11.4c-2.9 7.3-7.1 13.9-12.2 19.6c-10.4 11.4-24.8 19-41 20.6L406.6 512l41.4 0c35.3 0 64-28.7 64-64l0-192C512 114.6 397.4 0 256 0S0 114.6 0 256zM150.6 512l210.7 0-64-64-82.7 0-64 64zM160 216l0 80c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-144 0c-13.3 0-24 10.7-24 24z" />
        <path d="M112 192c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-160 0c-35.3 0-64-28.7-64-64l0-192zm48 24l0 80c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-144 0c-13.3 0-24 10.7-24 24zm96 200a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TrainTunnel;
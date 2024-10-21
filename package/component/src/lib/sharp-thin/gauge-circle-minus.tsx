
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-circle-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-minus?s=sharp-thin gauge-circle-minus}
 * @preview ![gauge-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gauge-circle-minus.svg)
 */
const GaugeCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 496c35.6 0 69.4-7.7 99.8-21.6c3.3 4.4 6.9 8.6 10.6 12.7C333 503 295.5 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C375.4 0 475.6 81.7 504 192.2c-2.6-.1-5.3-.2-8-.2c-2.9 0-5.7 .1-8.6 .2C459.5 90.6 366.5 16 256 16C123.5 16 16 123.5 16 256s107.5 240 240 240zm0-96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 16c-35.3 0-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5L248 80l0-8 16 0 0 8 0 208.5c31.6 3.9 56 30.9 56 63.5c0 35.3-28.7 64-64 64zM144 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 240a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM352 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM496 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm80 152l-8 0-144 0-8 0 0-16 8 0 144 0 8 0 0 16z" />
    </Icon>
);

export default GaugeCircleMinus;
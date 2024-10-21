
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-circle-minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-minus?s=light gauge-circle-minus}
 * @preview ![gauge-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gauge-circle-minus.svg)
 */
const GaugeCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 480c32.2 0 62.8-6.8 90.5-19c5.8 9.3 12.5 18.1 19.8 26.1C333 503 295.5 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C375.4 0 475.6 81.7 504 192.2c-2.6-.1-5.3-.2-8-.2c-8.4 0-16.7 .6-24.8 1.7C444.3 100.3 358.1 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32c-35.3 0-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-194c0-8.8 7.2-16 16-16s16 7.2 16 16l0 194c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64zM144 120a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM72 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM344 144a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM496 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm80 144c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default GaugeCircleMinus;
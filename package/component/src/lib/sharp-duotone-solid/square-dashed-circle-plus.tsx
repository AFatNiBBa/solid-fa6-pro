
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-dashed-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed-circle-plus?s=sharp-duotone-solid square-dashed-circle-plus}
 * @preview ![square-dashed-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-dashed-circle-plus.svg)
 */
const SquareDashedCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64l0 96 64 0 0-64 64 0 0-64L32 32 0 32zM0 192L0 320l64 0 0-128L0 192zM0 352l0 96 0 32 32 0 96 0 0-64-64 0 0-64L0 352zM160 32l0 64 128 0 0-64L160 32zm0 384l0 64 128 0 0-10.8c-11.3-16-19.9-33.9-25.4-53.2L160 416zM320 32l0 64 64 0 0 102.6c15.3-4.3 31.4-6.6 48-6.6c5.4 0 10.7 .2 16 .7L448 64l0-32-32 0-96 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default SquareDashedCirclePlus;
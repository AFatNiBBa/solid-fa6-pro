
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-dashed-circle-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed-circle-plus?s=duotone square-dashed-circle-plus}
 * @preview ![square-dashed-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-dashed-circle-plus.svg)
 */
const SquareDashedCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 32 64 0 0-32c0-17.7 14.3-32 32-32l32 0 0-64L96 32C43 32 0 75 0 128zm0 64L0 320l64 0 0-128L0 192zM0 352l0 32c0 53 43 96 96 96l32 0 0-64-32 0c-17.7 0-32-14.3-32-32l0-32L0 352zM160 32l0 64 128 0 0-64L160 32zm0 384l0 64 128 0 0-10.8c-11.3-16-19.9-33.9-25.4-53.2L160 416zM320 32l0 64 32 0c17.7 0 32 14.3 32 32l0 70.6c15.3-4.3 31.4-6.6 48-6.6c5.4 0 10.7 .2 16 .7l0-64.7c0-53-43-96-96-96l-32 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default SquareDashedCirclePlus;
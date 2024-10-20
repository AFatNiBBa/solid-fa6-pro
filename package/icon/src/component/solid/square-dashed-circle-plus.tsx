
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed-circle-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed-circle-plus?s=solid square-dashed-circle-plus}
 * @preview ![square-dashed-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-dashed-circle-plus.svg)
 */
const SquareDashedCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 32C43 32 0 75 0 128l0 32 64 0 0-32c0-17.7 14.3-32 32-32l32 0 0-64L96 32zM0 192L0 320l64 0 0-128L0 192zM64 352L0 352l0 32c0 53 43 96 96 96l32 0 0-64-32 0c-17.7 0-32-14.3-32-32l0-32zM384 128l0 70.6c15.3-4.3 31.4-6.6 48-6.6c5.4 0 10.7 .2 16 .7l0-64.7c0-53-43-96-96-96l-32 0 0 64 32 0c17.7 0 32 14.3 32 32zM160 480l136.2 0c-15.3-18.5-26.9-40.2-33.6-64L160 416l0 64zm0-384l128 0 0-64L160 32l0 64zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default SquareDashedCirclePlus;
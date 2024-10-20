
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed-circle-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed-circle-plus?s=sharp-solid square-dashed-circle-plus}
 * @preview ![square-dashed-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-dashed-circle-plus.svg)
 */
const SquareDashedCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32L0 32 0 64l0 96 64 0 0-64 64 0 0-64L32 32zM0 192L0 320l64 0 0-128L0 192zM0 352l0 96 0 32 32 0 96 0 0-64-64 0 0-64L0 352zM432 192c5.4 0 10.7 .2 16 .7L448 64l0-32-32 0-96 0 0 64 64 0 0 102.6c15.3-4.3 31.4-6.6 48-6.6zM262.6 416L160 416l0 64 136.2 0c-15.3-18.5-26.9-40.2-33.6-64zM160 96l128 0 0-64L160 32l0 64zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16z" />
    </Icon>
);

export default SquareDashedCirclePlus;
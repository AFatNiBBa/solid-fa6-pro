
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed-circle-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed-circle-plus?s=sharp-light square-dashed-circle-plus}
 * @preview ![square-dashed-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-dashed-circle-plus.svg)
 */
const SquareDashedCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 32l112 0 0 32L32 64l0 96L0 160 0 48 0 32l16 0zM0 192l32 0 0 128L0 320 0 192zM0 352l32 0 0 96 96 0 0 32L16 480 0 480l0-16L0 352zM416 64l-96 0 0-32 112 0 16 0 0 16 0 144c-10.9 0-21.6 1-32 2.9L416 64zM288 480l-128 0 0-32 128 0 0 32zM160 64l0-32 128 0 0 32L160 64zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-64l0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16z" />
    </Icon>
);

export default SquareDashedCirclePlus;
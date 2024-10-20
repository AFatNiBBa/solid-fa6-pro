
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed-circle-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed-circle-plus?s=sharp-thin square-dashed-circle-plus}
 * @preview ![square-dashed-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-dashed-circle-plus.svg)
 */
const SquareDashedCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 32l120 0 0 16L16 48l0 112L0 160 0 40l0-8 8 0zM0 192l16 0 0 128L0 320 0 192zM0 352l16 0 0 112 112 0 0 16L8 480l-8 0 0-8L0 352zM448 192.7c-5.3-.5-10.6-.7-16-.7l0-144L320 48l0-16 120 0 8 0 0 8 0 152.7zM288 469.2l0 10.8-128 0 0-16 124.5 0c1.1 1.8 2.3 3.5 3.5 5.2zM160 48l0-16 128 0 0 16L160 48zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm152-72l0 64 64 0 8 0 0 16-8 0-64 0 0 64 0 8-16 0 0-8 0-64-64 0-8 0 0-16 8 0 64 0 0-64 0-8 16 0 0 8z" />
    </Icon>
);

export default SquareDashedCirclePlus;

import { Icon } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=sharp-light block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M136 64l0 64 72 0 32 0 72 0 0-64L136 64zm-32 64l0-64L32 64l0 64 72 0zM32 160l0 80 72 0 32 0 72 0 0-80L32 160zm0 192l72 0 0-80-72 0 0 80zm0 32l0 64 176 0 0-64-72 0-32 0-72 0zm104-32l176 0 0-80-176 0 0 80zm208 0l72 0 0-80-72 0 0 80zm72 32l-72 0-32 0-72 0 0 64 176 0 0-64zm0-224l-176 0 0 80 72 0 32 0 72 0 0-80zm0-32l0-64-72 0 0 64 72 0zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default BlockBrick;
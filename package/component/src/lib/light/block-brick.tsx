
import { Icon } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=light block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M136 64l0 64 72 0 32 0 72 0 0-64L136 64zm-32 0L64 64C46.3 64 32 78.3 32 96l0 32 72 0 0-64zM32 160l0 80 72 0 32 0 72 0 0-80L32 160zm0 192l72 0 0-80-72 0 0 80zm0 32l0 32c0 17.7 14.3 32 32 32l144 0 0-64-72 0-32 0-72 0zm104-32l176 0 0-80-176 0 0 80zm208 0l72 0 0-80-72 0 0 80zm72 32l-72 0-32 0-72 0 0 64 144 0c17.7 0 32-14.3 32-32l0-32zm0-224l-176 0 0 80 72 0 32 0 72 0 0-80zm0-32l0-32c0-17.7-14.3-32-32-32l-40 0 0 64 72 0zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default BlockBrick;
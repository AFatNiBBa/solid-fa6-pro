
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=sharp-solid plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32l0-32L160 0l0 32 0 112L48 144l-32 0 0 64 32 0 112 0 0 112 0 32 64 0 0-32 0-112 112 0 32 0 0-64-32 0-112 0 0-112zM32 448L0 448l0 64 32 0 320 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default PlusMinus;
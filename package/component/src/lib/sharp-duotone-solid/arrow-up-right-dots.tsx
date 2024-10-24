
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right-dots` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-dots?s=sharp-duotone-solid arrow-up-right-dots}
 * @preview ![arrow-up-right-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-right-dots.svg)
 */
const ArrowUpRightDots: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 464a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM224 336a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM352 208a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM480 80a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M128 0l32 0L288 0l32 0 0 32 0 128 0 32-64 0 0-32 0-50.7L70.6 294.6 48 317.3 2.7 272l22.6-22.6L210.7 64 160 64l-32 0 0-64z" />
    </Icon>
);

export default ArrowUpRightDots;
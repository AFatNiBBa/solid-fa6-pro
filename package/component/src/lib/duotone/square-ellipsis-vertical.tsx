
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-ellipsis-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis-vertical?s=duotone square-ellipsis-vertical}
 * @preview ![square-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-ellipsis-vertical.svg)
 */
const SquareEllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm256 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M192 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SquareEllipsisVertical;
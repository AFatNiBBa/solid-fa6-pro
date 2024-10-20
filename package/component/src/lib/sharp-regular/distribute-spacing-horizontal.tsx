
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-horizontal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-horizontal?s=sharp-regular distribute-spacing-horizontal}
 * @preview ![distribute-spacing-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/distribute-spacing-horizontal.svg)
 */
const DistributeSpacingHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 0L432 0l0 512 48 0L480 0zM304 368l-96 0 0-224 96 0 0 224zm48-224l0-48-48 0-96 0-48 0 0 48 0 224 0 48 48 0 96 0 48 0 0-48 0-224zM80 512L80 0 32 0l0 512 48 0z" />
    </Icon>
);

export default DistributeSpacingHorizontal;
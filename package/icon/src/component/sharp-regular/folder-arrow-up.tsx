
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=sharp-regular folder-arrow-up}
 * @preview ![folder-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-arrow-up.svg)
 */
const FolderArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zm8 232l0 24-48 0 0-24 0-102.1-31 31-17 17L150.1 288l17-17 72-72 17-17 17 17 72 72 17 17L328 321.9l-17-17-31-31L280 376z" />
    </Icon>
);

export default FolderArrowUp;
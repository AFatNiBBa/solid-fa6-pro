
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=sharp-regular files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 368l256 0 0-240-80 0 0-80L144 48l0 320zM352 0l96 96 0 272 0 48-48 0-256 0-48 0 0-48L96 48 96 0l48 0L352 0zM48 96l0 24 0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0z" />
    </Icon>
);

export default Files;

import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-light trash}
 * @preview ![trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash.svg)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M151.1 0L160 0 288 0l8.9 0 4.7 7.5L336.9 64l47.1 0L416 64l32 0 0 32-34.3 0L384 512 64 512 34.3 96 0 96 0 64l32 0 32.1 0 47.1 0L146.4 7.5 151.1 0zm-2.3 64l150.3 0-20-32L168.9 32l-20 32zM66.4 96L93.8 480l260.4 0L381.6 96 66.4 96z" />
    </Icon>
);

export default Trash;
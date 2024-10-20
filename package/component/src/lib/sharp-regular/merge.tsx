
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=sharp-regular merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l24 0 72 0 64 0 11.9 0 7.2 9.5L299.9 232l119 0-39-39-17-17 33.9-33.9 17 17 80 80 17 17-17 17-80 80-17 17L362.9 336l17-17 39-39-119 0L179.1 438.5l-7.2 9.5L160 448l-64 0-72 0L0 448l0-48 24 0 72 0 52.1 0L257.8 256 148.1 112 96 112l-72 0L0 112 0 64z" />
    </Icon>
);

export default Merge;

import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=sharp-thin compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm336 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm80 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM88 256l-16 0C72 154.4 154.4 72 256 72l0 16C163.2 88 88 163.2 88 256z" />
    </Icon>
);

export default CompactDisc;
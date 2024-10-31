
import { Icon } from "../../index";

/**
 * A component that renders the `kerning` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=sharp-thin kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424.7 4.7l-224 496 14.6 6.6 224-496L424.7 4.7zM1.7 96L152.8 411.4 155 416l10.1 0 2.2-4.5L318.3 96l-17.7 0L160 389.5 19.4 96 1.7 96zM475 96l-2.2 4.5L321.7 416l17.7 0 38.3-80 204.5 0 38.3 80 17.7 0L487.2 100.5 485 96 475 96zm99.6 224l-189.2 0L480 122.5 574.6 320z" />
    </Icon>
);

export default Kerning;
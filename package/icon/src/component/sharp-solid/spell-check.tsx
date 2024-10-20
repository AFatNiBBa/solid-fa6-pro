
import { Icon } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=sharp-solid spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M106.7 0L98.5 19.7 5.1 243.7 0 256l69.3 0 13.3-32 90.7 0 13.3 32 69.3 0-5.1-12.3-93.3-224L149.3 0 106.7 0zm2.7 160L128 115.2 146.7 160l-37.3 0zM288 0L256 0l0 32 0 96 0 96 0 32 32 0 80 0c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80L288 0zm80 80c0 8.8-7.2 16-16 16l-32 0 0-32 32 0c8.8 0 16 7.2 16 16zM320 192l0-32 32 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0zM550.6 294.6L573.3 272 528 226.7l-22.6 22.6L336 418.7l-73.4-73.4L240 322.7 194.7 368l22.6 22.6 96 96L336 509.3l22.6-22.6 192-192z" />
    </Icon>
);

export default SpellCheck;
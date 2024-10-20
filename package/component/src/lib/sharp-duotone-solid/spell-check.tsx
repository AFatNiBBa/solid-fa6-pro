
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=sharp-duotone-solid spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l69.3 0 13.3-32 90.7 0 13.3 32 69.3 0c-1.7-4.1-3.4-8.2-5.1-12.3l-93.3-224L149.3 0 106.7 0 98.5 19.7 5.1 243.7 0 256zm109.3-96L128 115.2 146.7 160l-37.3 0zM256 0l0 32 0 96 0 96c0 10.7 0 21.3 0 32l32 0 80 0c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80L288 0 256 0zm64 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0-32zm0 96l32 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0-32z" />
        <path d="M573.3 272l-22.6 22.6-192 192L336 509.3l-22.6-22.6-96-96L194.7 368 240 322.7l22.6 22.6L336 418.7 505.4 249.4 528 226.8 573.3 272z" />
    </Icon>
);

export default SpellCheck;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `option` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=sharp-duotone-solid option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 64l0 64 32 0 160 0 32 0 0-64-32 0L448 64l-32 0z" />
        <path d="M432.6 448l15.4 0 160 0 32 0 0-64-32 0-144.6 0L217 76l-9.6-12L192 64 32 64 0 64l0 64 32 0 144.6 0L423 436l9.6 12z" />
    </Icon>
);

export default Option;
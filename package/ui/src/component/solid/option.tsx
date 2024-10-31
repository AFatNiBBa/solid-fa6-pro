
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=solid option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 448c-9.7 0-18.9-4.4-25-12L176.6 128 32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l160 0c9.7 0 18.9 4.4 25 12L463.4 384 608 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-320c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0z" />
    </Icon>
);

export default Option;
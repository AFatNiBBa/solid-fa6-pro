
import { Icon } from "../../index";

/**
 * A component that renders the `font-case` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-case?s=sharp-thin font-case}
 * @preview ![font-case](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/font-case.svg)
 */
const FontCase: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M168.5 37.2l1.9-5.2 11.1 0 1.9 5.2L348.4 480l-17.1 0L283.7 352 68.3 352 20.7 480 3.6 480 168.5 37.2zM74.3 336l203.4 0L176 62.9 74.3 336zM640 168l0 108 0 88 0 108 0 8-16 0 0-8 0-49.2C603.8 457 566.6 480 524 480c-64.1 0-116-51.9-116-116l0-88c0-64.1 51.9-116 116-116c42.6 0 79.8 23 100 57.2l0-49.2 0-8 16 0 0 8zm-116 8c-55.2 0-100 44.8-100 100l0 88c0 55.2 44.8 100 100 100s100-44.8 100-100l0-88c0-55.2-44.8-100-100-100z" />
    </Icon>
);

export default FontCase;
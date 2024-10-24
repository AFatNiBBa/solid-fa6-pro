
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=sharp-thin right-to-line}
 * @preview ![right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/right-to-line.svg)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 72l0-8 16 0 0 8 0 368 0 8-16 0 0-8 0-368zM160 192l0-16 0-64 0-16 16 0 16 0L340.7 244.7 352 256l-11.3 11.3L192 416l-16 0-16 0 0-16 0-64 0-16-16 0L16 320 0 320l0-16 0-96 0-16 16 0 128 0 16 0zm16 0l0 16-16 0L16 208l0 96 144 0 16 0 0 16 0 80 9.4 0 144-144-144-144-9.4 0 0 80z" />
    </Icon>
);

export default RightToLine;
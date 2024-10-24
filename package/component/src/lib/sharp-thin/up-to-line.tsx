
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=sharp-thin up-to-line}
 * @preview ![up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/up-to-line.svg)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 48L0 48 0 32l8 0 368 0 8 0 0 16-8 0L8 48zM128 320l-16 0-64 0-16 0 0-16 0-16L180.7 139.3 192 128l11.3 11.3L352 288l0 16 0 16-16 0-64 0-16 0 0 16 0 128 0 16-16 0-96 0-16 0 0-16 0-128 0-16zm0-16l16 0 0 16 0 144 96 0 0-144 0-16 16 0 80 0 0-9.4-144-144L48 294.6l0 9.4 80 0z" />
    </Icon>
);

export default UpToLine;
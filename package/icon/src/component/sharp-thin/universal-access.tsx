
import { Icon } from "../../index";

/**
 * A component that renders the `universal-access` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/universal-access?s=sharp-thin universal-access}
 * @preview ![universal-access](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/universal-access.svg)
 */
const UniversalAccess: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM131.9 181.4l-6.5 14.6 7.3 3.2 72 32 1.6 .7 1.7 0 0 94.8-23.7 78.9-2.3 7.7 15.3 4.6 2.3-7.7L222 336l68.1 0 22.3 74.3 2.3 7.7 15.3-4.6-2.3-7.7L304 326.8l0-94.8 1.7 0 1.6-.7 72-32 7.3-3.2-6.5-14.6-7.3 3.2L302.3 216 288 216l-64 0-14.3 0-70.4-31.3-7.3-3.2zM224 232l64 0 0 88-64 0 0-88z" />
    </Icon>
);

export default UniversalAccess;
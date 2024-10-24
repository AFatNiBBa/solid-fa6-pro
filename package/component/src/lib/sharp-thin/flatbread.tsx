
import { Icon } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=sharp-thin flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm357.7-90.3l-192 192-5.7 5.7L148.7 352l5.7-5.7 192-192 5.7-5.7L363.3 160l-5.7 5.7zM251.3 112l-5.7 5.7-128 128-5.7 5.7L100.7 240l5.7-5.7 128-128 5.7-5.7L251.3 112zM405.7 277.7l-128 128-5.7 5.7L260.7 400l5.7-5.7 128-128 5.7-5.7L411.3 272l-5.7 5.7z" />
    </Icon>
);

export default Flatbread;
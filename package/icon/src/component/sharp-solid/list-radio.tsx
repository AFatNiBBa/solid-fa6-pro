
import { Icon } from "../../index";

/**
 * A component that renders the `list-radio` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-radio?s=sharp-solid list-radio}
 * @preview ![list-radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list-radio.svg)
 */
const ListRadio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 160A64 64 0 1 0 64 32a64 64 0 1 0 0 128zM192 64l-32 0 0 64 32 0 288 0 32 0 0-64-32 0L192 64zm0 160l-32 0 0 64 32 0 288 0 32 0 0-64-32 0-288 0zm0 160l-32 0 0 64 32 0 288 0 32 0 0-64-32 0-288 0zM40 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0A64 64 0 1 0 0 416a64 64 0 1 0 128 0zM64 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ListRadio;
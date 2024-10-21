
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=solid windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 64 0 0 8.6c0 20.3 18.7 35.5 38.5 31.3l41.5-8.6 0-286.7L166.5 56c-19.9-4.1-38.5 11-38.5 31.3l0 8.6L64 96l0-64zm64 112l0 128-64 0 0-128 64 0zM272 78l0 260 96-20 0-220L272 78zM486.5 293.3c14.8-3.1 25.5-16.2 25.5-31.3l0-108c0-15.2-10.6-28.2-25.5-31.3L432 111.3l0 193.3 54.5-11.4z" />
    </Icon>
);

export default Windsock;
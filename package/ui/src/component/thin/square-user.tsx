
import { Icon } from "../../index";

/**
 * A component that renders the `square-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=thin square-user}
 * @preview ![square-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-user.svg)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48l0-16c0-70.7-57.3-128-128-128l-64 0c-70.7 0-128 57.3-128 128l0 16c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM368 464L80 464l0-16c0-61.9 50.1-112 112-112l64 0c61.9 0 112 50.1 112 112l0 16zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM304 208a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default SquareUser;
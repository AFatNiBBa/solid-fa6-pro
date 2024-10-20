
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=thin circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496c-54 0-103.9-17.9-144-48c0 0 0 0 0 0c0-61.9 50.1-112 112-112l64 0c61.9 0 112 50.1 112 112c0 0 0 0 0 0c5.3-4 10.4-8.2 15.4-12.6C409.1 370.6 354.5 320 288 320l-64 0c-66.5 0-121.1 50.6-127.4 115.4C47.2 391.5 16 327.4 16 256C16 123.5 123.5 16 256 16s240 107.5 240 240s-107.5 240-240 240zm0 16A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-304a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default CircleUser;
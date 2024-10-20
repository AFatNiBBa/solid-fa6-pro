
import { Icon } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=thin hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M200 24c0-4.6-3.6-7.7-7.4-7.4C93.8 24.4 16 107.1 16 208c0 91 63.4 167.3 148.4 187c10.9 2.5 19.6 12.1 19.6 24.1l0 68.3c0 4.6 3.6 7.7 7.4 7.4C290.2 487 368 404.3 368 303.4c0-91-63.4-167.3-148.4-187c-10.9-2.5-19.6-12.1-19.6-24.1L200 24zM191.4 .7C205.2-.4 216 10.9 216 24l0 68.3c0 3.8 2.8 7.5 7.2 8.5C315.3 122.2 384 204.7 384 303.4c0 109.3-84.3 198.9-191.4 207.3c-13.9 1.1-24.6-10.3-24.6-23.3l0-68.3c0-3.8-2.8-7.5-7.2-8.5C68.7 389.2 0 306.7 0 208C0 98.7 84.3 9.1 191.4 .7zM192 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm16 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Hurricane;
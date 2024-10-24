
import { Icon } from "../../index";

/**
 * A component that renders the `at` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/at?s=sharp-solid at}
 * @preview ![at](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/at.svg)
 */
const At: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64C150 64 64 150 64 256s86 192 192 192l32 0 0 64-32 0C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 96 0 32-32 0-40 0c-36 0-68.2-15.8-90.2-40.9C326.4 368.3 293 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c32.5 0 62.1 12.1 84.7 32l43.3 0 0 32 0 64 0 8c0 30.9 25.1 56 56 56l8 0 0-64c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default At;
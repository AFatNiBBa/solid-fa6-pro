
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=regular boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 48l368 0c22.1 0 40 17.9 40 40l0 72-96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-96 0 0-72c0-22.1 17.9-40 40-40zM48 88l0 74c-27.6 7.1-48 32.2-48 62L0 448c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-29.8-20.4-54.9-48-62l0-74c0-48.6-39.4-88-88-88L136 0C87.4 0 48 39.4 48 88zM64 208l512 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zM176 432a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-48-96a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm432 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-96-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Boombox;
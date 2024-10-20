
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=thin command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 80C0 35.8 35.8 0 80 0s80 35.8 80 80l0 64 192 0 0-64c0-44.2 35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80l-64 0 0 192 64 0c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80l0-64-192 0 0 64c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80l64 0 0-192-64 0C35.8 160 0 124.2 0 80zm144 64l0-64c0-35.3-28.7-64-64-64S16 44.7 16 80s28.7 64 64 64l64 0zm16 208l192 0 0-192-192 0 0 192zm-16 16l-64 0c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64l0-64zm224 0l0 64c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64l-64 0zm0-224l64 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64l0 64z" />
    </Icon>
);

export default Command;
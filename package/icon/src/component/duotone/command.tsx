
import { Icon, generic } from "../../index";

/**
 * A component that renders the `command` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=duotone command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96s96-43 96-96l0-32 0-64 0-128-64 0 0 128-32 0c-53 0-96 43-96 96zm64 0c0-17.7 14.3-32 32-32l32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32zM320 96l0 32 0 64 0 128 64 0 0-128 32 0c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96zm64 0c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32l-32 0 0-32z" />
        <path d="M0 96C0 43 43 0 96 0s96 43 96 96l0 32 128 0 0 64-128 0-64 0-32 0c0 0 0 0 0 0C43 192 0 149 0 96zM320 320l64 0 32 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96l0-32-128 0 0-64 128 0zM128 128l0-32c0-17.7-14.3-32-32-32S64 78.3 64 96s14.3 32 32 32l32 0zM384 384l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32l-32 0z" />
    </Icon>
);

export default Command;
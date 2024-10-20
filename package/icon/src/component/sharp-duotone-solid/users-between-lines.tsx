
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-between-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-between-lines?s=sharp-duotone-solid users-between-lines}
 * @preview ![users-between-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users-between-lines.svg)
 */
const UsersBetweenLines: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 352l135.4 0 28.2-75.2 7.8-20.8L64 256 32 352zM83.2 160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm94.4 256l288 0-24-64-24-64-12.3 0-170.7 0-9.1 0-24 64-24 64zm64-240a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm193.6-16a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm4.6 96l7.8 20.8L475.8 352 608 352l-32-96-136.2 0z" />
        <path d="M24 0L0 0 0 48l24 0 592 0 24 0 0-48L616 0 24 0zm0 464L0 464l0 48 24 0 592 0 24 0 0-48-24 0L24 464z" />
    </Icon>
);

export default UsersBetweenLines;
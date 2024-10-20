
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-rectangle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rectangle?s=duotone users-rectangle}
 * @preview ![users-rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/users-rectangle.svg)
 */
const UsersRectangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 309.3c0 14.7 11.9 26.7 26.7 26.7l56.1 0c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4l-69.3 0C119.9 256 96 279.9 96 309.3zM127.8 176a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM208 360c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47c-3.9-.7-7.9-1-12-1l-80 0c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24zm48-168a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm140 70.4c32.4 11.9 57.2 39.5 65.2 73.6l56.1 0c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3l-69.3 0c-9.2 0-17.8 2.3-25.3 6.4zM416 176a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M0 96C0 43 43 0 96 0L544 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 96zM96 64C78.3 64 64 78.3 64 96l0 320c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L96 64z" />
    </Icon>
);

export default UsersRectangle;
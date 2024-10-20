
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cookie` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cookie?s=duotone cookie}
 * @preview ![cookie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cookie.svg)
 */
const Cookie: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M17.6 255.5l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c7.1-14.6 10.7-30.5 10.7-46.5c0-6.1-.5-12.3-1.6-18.4l-14.6-82.8c-3.9-22.1-14.6-42.3-30.7-57.9L388.9 57.5c-16.1-15.6-36.6-25.6-58.7-28.7L247.2 17c-4.9-.7-9.8-1-14.7-1c-17.2 0-34.3 4.2-49.6 12.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9zM208 336a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm32-160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM400 304a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M176 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Cookie;
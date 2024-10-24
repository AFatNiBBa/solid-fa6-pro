
import { Icon } from "../../index";

/**
 * A component that renders the `users-rectangle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rectangle?s=light users-rectangle}
 * @preview ![users-rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/users-rectangle.svg)
 */
const UsersRectangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 0C35.8 0 0 35.8 0 80L0 432c0 44.2 35.8 80 80 80l480 0c44.2 0 80-35.8 80-80l0-352c0-44.2-35.8-80-80-80L80 0zM32 80c0-26.5 21.5-48 48-48l480 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48L32 80zM288 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM360 320c19.4 0 35.5 13.7 39.2 32l-158.4 0c3.7-18.3 19.8-32 39.2-32l80 0zm-80-32c-39.8 0-72 32.2-72 72c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24c0-39.8-32.2-72-72-72l-40 0-40 0zM159.8 176a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM128 312c0-13.3 10.7-24 24-24l56 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-56 0c-30.9 0-56 25.1-56 56l0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8zM464.2 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM488 288c13.3 0 24 10.7 24 24l0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8c0-30.9-25.1-56-56-56l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0z" />
    </Icon>
);

export default UsersRectangle;
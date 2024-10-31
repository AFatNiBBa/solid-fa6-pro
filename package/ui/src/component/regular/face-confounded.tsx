
import { Icon } from "../../index";

/**
 * A component that renders the `face-confounded` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confounded?s=regular face-confounded}
 * @preview ![face-confounded](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-confounded.svg)
 */
const FaceConfounded: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm231 77.3l25 20 25-20c8.2-6.5 19.6-7 28.3-1.2l31.6 21.1L351 343c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-24 24c-8.1 8.1-20.8 9.3-30.3 3l-33.4-22.3-26.3 21c-8.8 7-21.2 7-30 0l-26.3-21L181.3 404c-9.5 6.3-22.2 5.1-30.3-3l-24-24c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l10.1 10.1L202.7 332c8.7-5.8 20.1-5.3 28.3 1.2zM133.5 178.7l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 189.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z" />
    </Icon>
);

export default FaceConfounded;
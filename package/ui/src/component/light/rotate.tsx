
import { Icon } from "../../index";

/**
 * A component that renders the `rotate` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=light rotate}
 * @preview ![rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rotate.svg)
 */
const Rotate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M426.1 301.2C406.2 376.5 337.6 432 256 432c-51 0-96.9-21.7-129-56.3l41-41c5.1-5.1 8-12.1 8-19.3c0-15.1-12.2-27.3-27.3-27.3L48 288c-8.8 0-16 7.2-16 16l0 100.7C32 419.8 44.2 432 59.3 432c7.2 0 14.2-2.9 19.3-8l25.7-25.7C142.3 438.7 196.2 464 256 464c97.4 0 179.2-67 201.8-157.4c2.4-9.7-5.2-18.6-15.2-18.6c-7.8 0-14.5 5.6-16.5 13.2zM385 136.3l-41 41c-5.1 5.1-8 12.1-8 19.3c0 15.1 12.2 27.3 27.3 27.3L464 224c8.8 0 16-7.2 16-16l0-100.7C480 92.2 467.8 80 452.7 80c-7.2 0-14.2 2.9-19.3 8l-25.7 25.7C369.7 73.3 315.8 48 256 48C158.6 48 76.8 115 54.2 205.4c-2.4 9.7 5.2 18.6 15.2 18.6c7.8 0 14.5-5.6 16.5-13.2C105.8 135.5 174.4 80 256 80c51 0 96.9 21.7 129.1 56.3zM448 192l-73.4 0L448 118.6l0 73.4zM64 320l73.4 0L64 393.4 64 320z" />
    </Icon>
);

export default Rotate;
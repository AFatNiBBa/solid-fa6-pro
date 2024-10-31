
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=sharp-light circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM231 203.9l25 31.2 25-31.2 9.3-11.6c8.3-10.4 20.8-16.4 34.1-16.4c24.1 0 43.6 19.5 43.6 43.6l0 3.6c0 12.5-5 24.5-13.8 33.4l-24.8 24.8L256 354.7l-73.4-73.4-24.8-24.8c-8.9-8.9-13.8-20.9-13.8-33.4l0-3.6c0-24.1 19.5-43.6 43.6-43.6c13.3 0 25.8 6 34.1 16.4l9.3 11.6zm121 100l24.8-24.8c14.9-14.9 23.2-35 23.2-56l0-3.6c0-41.8-33.9-75.6-75.6-75.6c-17 0-33.4 5.7-46.6 16c-4.6 3.6-8.8 7.7-12.5 12.4L256 183.9l-9.3-11.6c-3.7-4.6-7.9-8.8-12.5-12.4c-13.2-10.3-29.5-16-46.6-16c-41.8 0-75.6 33.9-75.6 75.6l0 3.6c0 21 8.3 41.1 23.2 56L160 303.9l73.4 73.4L256 399.9l22.6-22.6L352 303.9z" />
    </Icon>
);

export default CircleHeart;
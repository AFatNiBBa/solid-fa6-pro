
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=light circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM131.9 164.9c-29.4 29.8-29.4 78.2 0 108L233.5 376.1c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4L380.1 272.9c29.4-29.8 29.4-78.2 0-108c-27.8-28.2-71.9-29.7-101.5-4.6c-5.8 4.9-11 10.4-16.3 15.9c-2.1 2.2-4.2 4.5-6.4 6.6c-2.1-2.2-4.3-4.4-6.4-6.6c-5.2-5.5-10.5-11-16.3-15.9c-29.6-25.1-73.7-23.6-101.5 4.6zm83.6 22.5l29.1 29.6c6.3 6.4 16.5 6.4 22.8 0l29.1-29.6c16.8-17.1 44-17.1 60.8 0c17.1 17.4 17.1 45.7 0 63.1L256 353.3 154.7 250.4c-17.1-17.4-17.1-45.7 0-63.1c16.8-17.1 44-17.1 60.8 0z" />
    </Icon>
);

export default CircleHeart;
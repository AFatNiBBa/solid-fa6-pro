
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=duotone circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm109.8-29.1c0-19.5 7.3-39.1 22-54s33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4c5.9 6 11.8 12 17.7 18c5.9-6 11.8-12 17.7-18c14.7-14.9 33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4s22 34.5 22 54s-7.3 39.1-22 54L278.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L131.9 280.9c-14.7-14.9-22-34.5-22-54z" />
        <path d="M131.9 172.9c-29.4 29.8-29.4 78.2 0 108L233.5 384.1c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4L380.1 280.9c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0z" />
    </Icon>
);

export default CircleHeart;
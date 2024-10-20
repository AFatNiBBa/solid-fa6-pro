
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=sharp-duotone-solid circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112-28.4c0-41.8 33.9-75.6 75.6-75.6c23 0 44.7 10.4 59.1 28.4l9.3 11.6 9.3-11.6c14.4-17.9 36.1-28.4 59.1-28.4c41.8 0 75.6 33.9 75.6 75.6l0 3.6c0 21-8.3 41.1-23.2 56L352 311.9l-96 96-96-96-24.8-24.8c-14.9-14.9-23.2-35-23.2-56l0-3.6z" />
        <path d="M160 311.9l-24.8-24.8c-14.9-14.9-23.2-35-23.2-56l0-3.6c0-41.8 33.9-75.6 75.6-75.6c23 0 44.7 10.4 59.1 28.4l9.3 11.6 9.3-11.6c14.4-17.9 36.1-28.4 59.1-28.4c41.8 0 75.6 33.9 75.6 75.6l0 3.6c0 21-8.3 41.1-23.2 56L352 311.9l-96 96-96-96z" />
    </Icon>
);

export default CircleHeart;
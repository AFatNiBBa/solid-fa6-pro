
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=sharp-regular circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.2 287.1L160 311.9l96 96 96-96 24.8-24.8c14.9-14.9 23.2-35 23.2-56l0-3.6c0-41.8-33.9-75.6-75.6-75.6c-23 0-44.7 10.4-59.1 28.4L256 191.9l-9.3-11.6c-14.4-17.9-36.1-28.4-59.1-28.4c-41.8 0-75.6 33.9-75.6 75.6l0 3.6c0 21 8.3 41.1 23.2 56z" />
    </Icon>
);

export default CircleHeart;
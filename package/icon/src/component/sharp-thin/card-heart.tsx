
import { Icon } from "../../index";

/**
 * A component that renders the `card-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-heart?s=sharp-thin card-heart}
 * @preview ![card-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/card-heart.svg)
 */
const CardHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM184.3 177.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L192 352.1l-11.1-10.7L98.2 261.8C86.6 250.7 80 235.3 80 219.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2zm-3.4 18.9l-7.7-7.4c-8.5-8.2-19.8-12.7-31.6-12.7l-2.4 0C115.3 176 96 195.3 96 219.2c0 11.7 4.8 23 13.2 31.1L192 329.9l82.8-79.6c8.5-8.1 13.2-19.4 13.2-31.1c0-23.9-19.3-43.2-43.2-43.2l-2.4 0c-11.8 0-23.1 4.6-31.6 12.7l-7.7 7.4L192 206.8l-11.1-10.7z" />
    </Icon>
);

export default CardHeart;
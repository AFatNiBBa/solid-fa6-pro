
import { Icon } from "../../index";

/**
 * A component that renders the `card-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-heart?s=sharp-light card-heart}
 * @preview ![card-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/card-heart.svg)
 */
const CardHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM184.3 177.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L192 352.1l-11.1-10.7L98.2 261.8C86.6 250.7 80 235.3 80 219.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2zm79.3 61.6c5.3-5.1 8.3-12.2 8.3-19.6c0-15-12.2-27.2-27.2-27.2l-2.4 0c-7.7 0-15 3-20.5 8.3l-7.7 7.4L192 229l-22.2-21.3-7.7-7.4c-5.5-5.3-12.9-8.3-20.5-8.3l-2.4 0c-15 0-27.2 12.2-27.2 27.2c0 7.4 3 14.5 8.3 19.6L192 307.7l71.7-68.9z" />
    </Icon>
);

export default CardHeart;
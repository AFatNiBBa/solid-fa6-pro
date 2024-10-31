
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=sharp-thin house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M293.2 9.9L288 5.5l-5.2 4.5-280 240 10.4 12.1L64 218.5 64 504l0 8 8 0 432 0 8 0 0-8 0-285.5 50.8 43.5 10.4-12.1-280-240zM80 496l0-291.2L288 26.5 496 204.8 496 496 80 496zM280.3 241.2c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L288 416.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4zm-3.4 18.9L288 270.8l11.1-10.7 7.7-7.4c8.5-8.2 19.8-12.7 31.6-12.7l2.4 0c23.9 0 43.2 19.3 43.2 43.2c0 11.7-4.8 23-13.2 31.1L288 393.9l-82.8-79.6c-8.5-8.1-13.2-19.4-13.2-31.1c0-23.9 19.3-43.2 43.2-43.2l2.4 0c11.8 0 23.1 4.6 31.6 12.7l7.7 7.4z" />
    </Icon>
);

export default HouseHeart;
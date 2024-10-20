
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=sharp-light house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M298.6 12L288 2.7 277.4 12 5.4 252l21.2 24L64 243l0 253 0 16 16 0 416 0 16 0 0-16 0-253 37.4 33 21.2-24L298.6 12zM96 480l0-265.3L288 45.3 480 214.7 480 480 96 480zM280.3 241.2c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L288 416.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4zm79.3 61.6L288 371.7l-71.7-68.9c-5.3-5.1-8.3-12.2-8.3-19.6c0-15 12.2-27.2 27.2-27.2l2.4 0c7.7 0 15 3 20.5 8.3l7.7 7.4L288 293l22.2-21.3 7.7-7.4c5.5-5.3 12.9-8.3 20.5-8.3l2.4 0c15 0 27.2 12.2 27.2 27.2c0 7.4-3 14.5-8.3 19.6z" />
    </Icon>
);

export default HouseHeart;
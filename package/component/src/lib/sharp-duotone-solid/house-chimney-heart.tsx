
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney-heart?s=sharp-duotone-solid house-chimney-heart}
 * @preview ![house-chimney-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-chimney-heart.svg)
 */
const HouseChimneyHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0c-.2-80-.3-160-.6-240c-64.4-52.9-128.9-105.9-193.3-158.8C308.5 104.8 298.2 96.4 288 88C213.3 149.3 138.7 210.6 64 272zm112 43.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L288 448.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7z" />
        <path d="M0 240L288 0 416 106.7 416 32l96 0 0 154.7L576 240l0 32-64 0L288 88 64 272 0 272l0-32zm176 75.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L288 448.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7z" />
    </Icon>
);

export default HouseChimneyHeart;
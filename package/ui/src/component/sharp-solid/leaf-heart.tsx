
import { Icon } from "../../index";

/**
 * A component that renders the `leaf-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-heart?s=sharp-solid leaf-heart}
 * @preview ![leaf-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/leaf-heart.svg)
 */
const LeafHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96l104 0c50.2 0 92.7-33 106.9-78.6C501.5 58.8 512 106.2 512 156.6C512 317.1 405.1 447.3 273 448l-1 0c-81.7 0-150.4-55.7-170.2-131.2C68.7 347.5 48 391.3 48 440l0 16 0 24L0 480l0-24 0-16c0-75.1 38.3-141.2 96.4-179.9C102.5 168.5 178.8 96 272 96c0 0 0 0 0 0zM189.7 241.1c0 14.3 5.9 28 16.4 37.8l70.9 66.4L288 355.5l10.9-10.2 70.9-66.4c10.5-9.8 16.4-23.5 16.4-37.8c0-28.6-23.2-51.8-51.8-51.8l-3.5 0c-14 0-27.5 5.3-37.8 14.9l-5.2 4.8-5.2-4.8c-10.3-9.6-23.8-14.9-37.8-14.9l-3.5 0c-28.6 0-51.8 23.2-51.8 51.8z" />
    </Icon>
);

export default LeafHeart;
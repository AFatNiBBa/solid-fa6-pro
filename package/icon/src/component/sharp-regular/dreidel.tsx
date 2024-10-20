
import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=sharp-regular dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M446.7 67.2l-17 17L327.6 186.3l67.7 67.7 11.3 11.3L429.3 288l-22.6 22.6-11.3 11.3L246.6 470.6l-9.4 9.4L224 480 48 480l-16 0L0 480l0-32 0-16L0 256l0-13.3 9.4-9.4L158.1 84.7l11.3-11.3L192 50.7l22.6 22.6 11.3 11.3 67.7 67.7L395.8 50.2l17-17 33.9 33.9zM48 262.6L48 432l169.4 0 58.3-58.3L106.3 204.3 48 262.6zm92.3-92.3L309.7 339.7 361.4 288 192 118.6l-51.7 51.7z" />
    </Icon>
);

export default Dreidel;
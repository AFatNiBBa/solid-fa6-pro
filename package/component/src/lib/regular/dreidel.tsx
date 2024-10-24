
import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=regular dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M441 39c9.4 9.4 9.4 24.6 0 33.9L327.6 186.3l67.7 67.7c18.7 18.7 18.7 49.1 0 67.9L256 461.3c-12 12-28.3 18.7-45.3 18.7L64 480c-35.3 0-64-28.7-64-64L0 269.3c0-17 6.7-33.3 18.7-45.3L158.1 84.7c18.7-18.7 49.1-18.7 67.9 0l67.7 67.7L407 39c9.4-9.4 24.6-9.4 33.9 0zM106.3 204.3L52.7 257.9c-3 3-4.7 7.1-4.7 11.3L48 416c0 8.8 7.2 16 16 16l146.7 0c4.2 0 8.3-1.7 11.3-4.7l53.7-53.7L106.3 204.3zm33.9-33.9L309.7 339.7 361.4 288 192 118.6l-51.7 51.7z" />
    </Icon>
);

export default Dreidel;
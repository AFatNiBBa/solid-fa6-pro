
import { Icon } from "../../index";

/**
 * A component that renders the `face-tired` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tired?s=sharp-regular face-tired}
 * @preview ![face-tired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-tired.svg)
 */
const FaceTired: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 368c-41.8 0-80.5 12.2-112 33l0-1c0-61.9 50.1-112 112-112s112 50.1 112 112l0 1c-31.5-20.8-70.2-33-112-33zM112 144l118.9 64L112 272l45.7-64L112 144zm169.1 64L400 144l-45.7 64L400 272 281.1 208z" />
    </Icon>
);

export default FaceTired;

import { Icon } from "../../index";

/**
 * A component that renders the `face-tissue` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tissue?s=sharp-regular face-tissue}
 * @preview ![face-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-tissue.svg)
 */
const FaceTissue: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0 114.9-93.1 208-208 208c-13 0-25.6-1.2-37.9-3.4l-8.7 47.2c15.1 2.8 30.7 4.2 46.7 4.2c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 15.9 1.5 31.5 4.2 46.7l47.2-8.7C49.2 281.6 48 269 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208zM241 386.7l15 12 15-12 26.3-21L330.7 388l16.4 10.9L361 385l24-24 17-17L368 310.1l-17 17-10.1 10.1L309.3 316l-14.6-9.7-13.7 11-25 20-13.1-10.5-9.9 53.5 8.1 6.5zM112 128l45.7 64L112 256l118.9-64L112 128zm169.1 64L400 256l-45.7-64L400 128 281.1 192zM216 296L0 336l64 48L32 480l96-32 48 64 40-216z" />
    </Icon>
);

export default FaceTissue;
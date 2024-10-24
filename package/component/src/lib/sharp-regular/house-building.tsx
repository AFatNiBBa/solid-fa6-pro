
import { Icon } from "../../index";

/**
 * A component that renders the `house-building` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-building?s=sharp-regular house-building}
 * @preview ![house-building](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-building.svg)
 */
const HouseBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 48l256 0 0 416-176 0 0 48 176 0 48 0 0-48 0-416 0-48L592 0 336 0 288 0l0 48 0 86.3 48 40L336 48zm80 208l32 0 0-64-64 0 0 22.3 20.5 17.1L416 241l0 15zm0 96l32 0 0-64-32 0 0 64zm64-160l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64zM448 96l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM48 278.5l144-120 144 120L336 464 48 464l0-185.5zM0 256L0 464l0 48 48 0 288 0 48 0 0-48 0-208L192 96 0 256zm240 16l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default HouseBuilding;
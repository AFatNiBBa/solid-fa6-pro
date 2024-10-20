
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum-robot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum-robot?s=sharp-regular vacuum-robot}
 * @preview ![vacuum-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vacuum-robot.svg)
 */
const VacuumRobot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm335-79c-43.6-43.6-114.4-43.6-158.1 0L143 143c62.4-62.4 163.5-62.4 225.9 0s62.4 163.5 0 225.9L335 335c43.6-43.6 43.6-114.4 0-158.1zM224 201.4l11.3 11.3 64 64L310.6 288 288 310.6l-11.3-11.3-64-64L201.4 224 224 201.4zm-80 16l11.3 11.3 128 128L294.6 368 272 390.6l-11.3-11.3-128-128L121.4 240 144 217.4zm-16 80l11.3 11.3 64 64L214.6 384 192 406.6l-11.3-11.3-64-64L105.4 320 128 297.4z" />
    </Icon>
);

export default VacuumRobot;
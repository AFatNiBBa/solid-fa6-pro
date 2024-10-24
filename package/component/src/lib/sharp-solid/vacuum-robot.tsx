
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum-robot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum-robot?s=sharp-solid vacuum-robot}
 * @preview ![vacuum-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vacuum-robot.svg)
 */
const VacuumRobot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM356.7 356.7c55.6-55.6 55.6-145.8 0-201.4s-145.8-55.6-201.4 0l-22.6-22.6c68.1-68.1 178.5-68.1 246.6 0s68.1 178.5 0 246.6l-22.6-22.6zM224 201.4l11.3 11.3 64 64L310.6 288 288 310.6l-11.3-11.3-64-64L201.4 224 224 201.4zm-80 16l11.3 11.3 128 128L294.6 368 272 390.6l-11.3-11.3-128-128L121.4 240 144 217.4zm-16 80l11.3 11.3 64 64L214.6 384 192 406.6l-11.3-11.3-64-64L105.4 320 128 297.4z" />
    </Icon>
);

export default VacuumRobot;
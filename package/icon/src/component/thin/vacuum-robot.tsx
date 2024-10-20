
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum-robot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum-robot?s=thin vacuum-robot}
 * @preview ![vacuum-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/vacuum-robot.svg)
 */
const VacuumRobot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM202.3 234.3c-3.1 3.1-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0zm-72 8c-3.1 3.1-3.1 8.2 0 11.3l128 128c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-128-128c-3.1-3.1-8.2-3.1-11.3 0zm-8 83.3l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zM151.3 148c28.2-28.2 66.5-44 106.3-44C340.7 104 408 171.3 408 254.4c0 39.9-15.8 78.1-44 106.3l-9.6 9.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l9.6-9.6c31.2-31.2 48.7-73.5 48.7-117.7C424 162.5 349.5 88 257.6 88c-44.1 0-86.5 17.5-117.7 48.7l-9.6 9.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l9.6-9.6z" />
    </Icon>
);

export default VacuumRobot;
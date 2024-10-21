
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dashed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dashed?s=sharp-solid circle-dashed}
 * @preview ![circle-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-dashed.svg)
 */
const CircleDashed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M.5 240l64.2 0c3.4-41 19.6-78.3 44.7-108L64 86.6C27.5 128 4.1 181.3 .5 240zM132 109.4C161.7 84.3 199 68 240 64.7L240 .5C181.3 4.1 128 27.5 86.6 64L132 109.4zm140 338l0 64.2c58.6-3.6 112-27 153.4-63.5L380 402.6c-29.6 25.1-67 41.4-108 44.7zM402.6 380L448 425.4c36.5-41.4 59.9-94.7 63.5-153.4l-64.2 0c-3.4 41-19.6 78.3-44.7 108zm-316 68c41.4 36.5 94.7 59.9 153.4 63.5l0-64.2c-41-3.4-78.3-19.6-108-44.7L86.6 448zM64 425.4L109.4 380C84.3 350.3 68 313 64.7 272L.5 272c3.6 58.6 27 112 63.5 153.4zM425.4 64C384 27.5 330.6 4.1 272 .5l0 64.2c41 3.4 78.3 19.6 108 44.7L425.4 64zM448 86.6L402.6 132c25.1 29.6 41.4 67 44.7 108l64.2 0c-3.6-58.7-27-112-63.5-153.4z" />
    </Icon>
);

export default CircleDashed;
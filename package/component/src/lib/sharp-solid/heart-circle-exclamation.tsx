
import { Icon } from "../../index";

/**
 * A component that renders the `heart-circle-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-exclamation?s=sharp-solid heart-circle-exclamation}
 * @preview ![heart-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/heart-circle-exclamation.svg)
 */
const HeartCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 288L39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 13.8-2.1 27.4-6.2 40.4C483.4 197.8 458.4 192 432 192c-97.2 0-176 78.8-176 176c0 32.2 8.6 62.3 23.7 88.3L256 480 64 288zm368-64a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 224l0-32-32 0 0 32 32 0zm0-176l-32 0 0 16 0 80 0 16 32 0 0-16 0-80 0-16z" />
    </Icon>
);

export default HeartCircleExclamation;
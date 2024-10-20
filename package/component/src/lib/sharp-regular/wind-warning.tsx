
import { Icon } from "../../index";

/**
 * A component that renders the `wind-warning` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-warning?s=sharp-regular wind-warning}
 * @preview ![wind-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wind-warning.svg)
 */
const WindWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 432c61.8 0 116.1-31.8 147.5-80l54.9 0c-36 75.7-113.1 128-202.4 128C100.3 480 0 379.7 0 256S100.3 32 224 32c118.3 0 215.2 91.8 223.4 208l-48.2 0C391.2 150.3 315.8 80 224 80C126.8 80 48 158.8 48 256s78.8 176 176 176zM544 224l-66 0c-2.1-16.5-5.7-32.6-10.8-48l76.7 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-40 0-24 0 0-48 24 0 40 0c53 0 96 43 96 96s-43 96-96 96zM448 480l0-48 24 0 64 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-192 0-24 0 0-48 24 0 192 0c57.4 0 104 46.6 104 104s-46.6 104-104 104l-64 0-24 0zM248 128l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM200 368l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default WindWarning;
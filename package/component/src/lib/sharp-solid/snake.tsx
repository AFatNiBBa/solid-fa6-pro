
import { Icon } from "../../index";

/**
 * A component that renders the `snake` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snake?s=sharp-solid snake}
 * @preview ![snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/snake.svg)
 */
const Snake: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 80L352 16 288 64 176 64C96.5 64 32 128.5 32 208s64.5 144 144 144l144 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-63.9 0-.1 0L96 416 0 464l96 48 79.9 0 .1 0 144 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-144 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l112 0 64 48 160-64 0-64zM352 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Snake;
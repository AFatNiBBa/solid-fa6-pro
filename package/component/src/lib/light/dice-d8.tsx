
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=light dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 51.3L44.3 247.1l195.7 81 0-276.8zM72.8 293.5L240 460.7l0-98L72.8 293.5zM272 460.7L439.2 293.5 272 362.7l0 98zM467.8 247.1L272 51.3l0 276.8 195.8-81zM239 7c9.4-9.4 24.6-9.4 33.9 0L505 239c9.4 9.4 9.4 24.6 0 33.9L273 505c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L239 7z" />
    </Icon>
);

export default DiceD8;
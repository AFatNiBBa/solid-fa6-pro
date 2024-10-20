
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=duotone hexagon-divide}
 * @preview ![hexagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hexagon-divide.svg)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.4 256c0 12.4 3.2 24.9 9.6 36l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c6.4-11.1 9.6-23.6 9.6-36s-3.2-24.9-9.6-36L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220c-6.4 11.1-9.6 23.6-9.6 36zM144 256c0-13.3 10.7-24 24-24c58.7 0 117.3 0 176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24c-58.7 0-117.3 0-176 0c-13.3-.1-24-10.8-24-24zm144-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-80 96c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24zm112 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default HexagonDivide;
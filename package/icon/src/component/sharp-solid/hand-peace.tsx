
import { Icon } from "../../index";

/**
 * A component that renders the `hand-peace` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-peace?s=sharp-solid hand-peace}
 * @preview ![hand-peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-peace.svg)
 */
const HandPeace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0l0 240-64 0L192 0l64 0zm96 160l0 128-64 0 0-128 64 0zm32 32l64 0 0 128-64 0 0-128zM101.5 69.8L175.9 240l-69.9 0L42.8 95.4 30 66.1 88.6 40.5l12.8 29.3zM64 363l0-91 56.1 0 69.9 0 66.1 0 0 48 0 32-96 0-16 0 0 32 16 0 112 0 16 0 0-16 0-48 64 0 0 32 96 0c0 88.4-71.6 160-160 160l-61.7 0c-42.4 0-83.1-16.9-113.1-46.9l-11.6-11.6C77.5 429.5 64 396.9 64 363z" />
    </Icon>
);

export default HandPeace;
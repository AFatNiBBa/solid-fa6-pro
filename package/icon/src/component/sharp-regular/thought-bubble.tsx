
import { Icon } from "../../index";

/**
 * A component that renders the `thought-bubble` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thought-bubble?s=sharp-regular thought-bubble}
 * @preview ![thought-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/thought-bubble.svg)
 */
const ThoughtBubble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M145.1 112l27.7 0 13.9-24c13.9-24 39.8-40 69.3-40s55.4 16 69.3 40l13.9 24 27.7 0 1.1 0c53 0 96 43 96 96s-43 96-96 96l-33.6 0-19.6 0-14 13.7C289.2 329.1 273.5 336 256 336s-33.2-6.9-44.8-18.3l-14-13.7-19.6 0L144 304c-53 0-96-43-96-96s43-96 96-96l1.1 0zM256 0c-47.4 0-88.7 25.7-110.9 64L144 64C64.5 64 0 128.5 0 208s64.5 144 144 144l33.6 0c20.2 19.8 47.9 32 78.4 32s58.2-12.2 78.4-32l33.6 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-1.1 0C344.7 25.7 303.4 0 256 0zM104 472l80 0 0-80-80 0 0 80zM0 448l0 64 64 0 0-64L0 448z" />
    </Icon>
);

export default ThoughtBubble;
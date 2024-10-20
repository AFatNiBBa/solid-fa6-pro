
import { Icon } from "../../index";

/**
 * A component that renders the `thought-bubble` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thought-bubble?s=sharp-thin thought-bubble}
 * @preview ![thought-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/thought-bubble.svg)
 */
const ThoughtBubble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M145.1 80l9.2 0 4.6-8c19.4-33.5 55.6-56 97-56s77.6 22.5 97 56l4.6 8 9.2 0 1.1 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-33.6 0-6.5 0-4.7 4.6c-17.3 17-41 27.4-67.2 27.4s-49.9-10.4-67.2-27.4l-4.7-4.6-6.5 0L144 336C73.3 336 16 278.7 16 208S73.3 80 144 80l1.1 0zM256 0c-47.4 0-88.7 25.7-110.9 64L144 64C64.5 64 0 128.5 0 208s64.5 144 144 144l33.6 0c20.2 19.8 47.9 32 78.4 32s58.2-12.2 78.4-32l33.6 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-1.1 0C344.7 25.7 303.4 0 256 0zM168 456l-48 0 0-48 48 0 0 48zm-48-64l-16 0 0 16 0 48 0 16 16 0 48 0 16 0 0-16 0-48 0-16-16 0-48 0zM48 464l0 32-32 0 0-32 32 0zM16 448L0 448l0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0z" />
    </Icon>
);

export default ThoughtBubble;
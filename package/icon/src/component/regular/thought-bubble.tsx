
import { Icon } from "../../index";

/**
 * A component that renders the `thought-bubble` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thought-bubble?s=regular thought-bubble}
 * @preview ![thought-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/thought-bubble.svg)
 */
const ThoughtBubble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-48.7 0-91.4 25.6-115.4 64C62.6 65.9 0 129.6 0 208c0 79.5 64.5 144 144 144c9.4 0 18.7-.9 27.6-2.7C193.3 370.7 223.1 384 256 384s62.7-13.3 84.4-34.7c9 1.7 18.2 2.7 27.6 2.7c79.5 0 144-64.5 144-144c0-78.4-62.6-142.1-140.6-144C347.4 25.6 304.7 0 256 0zM176.3 98.7C190.4 68.7 220.8 48 256 48s65.6 20.7 79.7 50.7c4.3 9.1 13.8 14.6 23.8 13.7c2.8-.2 5.6-.4 8.5-.4c53 0 96 43 96 96s-43 96-96 96c-10 0-19.7-1.5-28.7-4.4c-9.6-3-20 .3-26.2 8.3C299.9 325 279.2 336 256 336s-43.9-11-57.1-28.1c-6.1-8-16.6-11.3-26.2-8.3c-9 2.8-18.7 4.4-28.7 4.4c-53 0-96-43-96-96s43-96 96-96c2.9 0 5.7 .1 8.5 .4c10 .9 19.5-4.6 23.8-13.7zM192 432a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM64 480A32 32 0 1 0 0 480a32 32 0 1 0 64 0z" />
    </Icon>
);

export default ThoughtBubble;
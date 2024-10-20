
import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=sharp-thin messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 320l-16 0-64 0L0 320l0-16L0 16 0 0 16 0 400 0l16 0 0 16 0 288 0 16-16 0-176 0L112 376l-16 8 0-17.9L96 336l0-16zm0-16l16 0 0 16 0 38.1 104.8-52.4 3.4-1.7 3.8 0 176 0 0-288L16 16l0 288 80 0zM256 432l0-80 16 0 0 80 144 0 3.8 0 3.4 1.7L528 486.1l0-38.1 0-16 16 0 80 0 0-288-176 0 0-16 176 0 16 0 0 16 0 288 0 16-16 0-64 0-16 0 0 16 0 30.1 0 17.9-16-8L416 448l-144 0-16 0 0-16z" />
    </Icon>
);

export default Messages;
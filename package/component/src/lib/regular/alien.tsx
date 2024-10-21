
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=regular alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M194.7 503.2c8.6 5.9 18.9 8.8 29.3 8.8s20.7-2.9 29.3-8.8C299.2 471.7 448 359.3 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224C0 359.3 148.8 471.7 194.7 503.2zM224 48c97.2 0 176 78.8 176 176c0 50.4-28.2 101.3-68.2 146.9c-39.2 44.7-84.2 78.1-105.6 92.7c0 0 0 0 0 0s0 0 0 0c0 0 0 0-.1 0l-.1 0c0 0-.1 0-.1 0l-.1 0c-.3 .1-.9 .2-1.8 .2s-1.4-.1-1.8-.2c-.1 0-.2-.1-.2-.1l-.1 0c0 0 0 0-.1 0c0 0 0 0 0 0s0 0 0 0c-21.4-14.6-66.4-48-105.6-92.7C76.2 325.3 48 274.4 48 224c0-97.2 78.8-176 176-176zm16 258.3c0 7.6 6.1 13.7 13.7 13.7l32 0c45.4 0 82.3-36.8 82.3-82.3c0-7.6-6.1-13.7-13.7-13.7l-32 0c-45.4 0-82.3 36.8-82.3 82.3zM125.7 224l-32 0c-7.6 0-13.7 6.1-13.7 13.7c0 45.4 36.8 82.3 82.3 82.3l32 0c7.6 0 13.7-6.1 13.7-13.7c0-45.4-36.8-82.3-82.3-82.3z" />
    </Icon>
);

export default Alien;

import { Icon } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=sharp-regular road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M95.6 432L196.2 80 296 80l0 24 0 24 48 0 0-24 0-24 99.8 0 27.3 95.5c13.6-8.1 29.1-13.3 45.6-15L480 32 344 32l-48 0L160 32 45.7 432 32 480l49.9 0L384 480l0-48-40 0 0-24 0-24-48 0 0 24 0 24L95.6 432zM344 216l0-24-48 0 0 24 0 80 0 24 48 0 0-24 0-80zm184 24c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default RoadLock;
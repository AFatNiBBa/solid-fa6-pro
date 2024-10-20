
import { Icon } from "../../index";

/**
 * A component that renders the `cat` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cat?s=sharp-thin cat}
 * @preview ![cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cat.svg)
 */
const Cat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M328 0l16 0 3.7 0 2.4 2.9L387.7 48l88.5 0L513.9 2.9 516.3 0 520 0l16 0 8 0 0 8 0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112L320 8l0-8 8 0zm8 128c0 53 43 96 96 96s96-43 96-96l0-112-4.3 0L486.1 61.1 483.7 64 480 64l-96 0-3.7 0-2.4-2.9L340.3 16 336 16l0 112zM112 334.7c29.5-79.5 97.5-141.2 183.5-160.8c1.7 5.2 3.8 10.2 6 15C191.3 212.8 112 310.5 112 424l0 72 216 0 8 0s0 0 0 0l32 0 0-13.3c0-19.1-15.5-34.7-34.7-34.7L288 448l-8 0 0-8 0-40c0-26.5-21.5-48-48-48l-32 0-8 0 0-16 8 0 32 0c35.3 0 64 28.7 64 64l0 12.9L404.4 306.3 418 292.9l0 19.1 0 184 46 0 0-227.6c5.5-1.2 10.8-2.8 16-4.6L480 504l0 8-8 0-62 0-8 0 0-8 0-172.9L299.4 432l33.9 0c28 0 50.7 22.7 50.7 50.7l0 21.3 0 8-8 0-192 0s0 0 0 0l-80 0-8 0 0-8 0-80 0-256c0-30.9-25.1-56-56-56l-8 0 0-16 8 0c39.8 0 72 32.2 72 72l0 166.7zM384 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Cat;
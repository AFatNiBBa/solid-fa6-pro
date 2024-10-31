
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-up-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-up-lock?s=sharp-thin arrow-down-up-lock}
 * @preview ![arrow-down-up-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-down-up-lock.svg)
 */
const ArrowDownUpLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 507.3l5.7-5.7 96-96 5.7-5.7L224 388.7l-5.7 5.7L136 476.7 136 264l280.3 0c.4-5.5 1.2-10.8 2.3-16L328 248l0-212.7 82.3 82.3 5.7 5.7L427.3 112l-5.7-5.7-96-96L320 4.7l-5.7 5.7-96 96-5.7 5.7L224 123.3l5.7-5.7L312 35.3 312 248 8 248l-8 0 0 16 8 0 112 0 0 212.7L37.7 394.3 32 388.7 20.7 400l5.7 5.7 96 96 5.7 5.7zM120 40l0 152 16 0 0-152 0-8-16 0 0 8zM312 320l0 152 0 8 16 0 0-8 0-152-16 0zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default ArrowDownUpLock;
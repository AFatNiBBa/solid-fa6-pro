
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=sharp-thin maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M193.4 56L56 193.4l-8-8L48 48l137.4 0 8 8zM192 32L48 32 32 32l0 16 0 144 12.7 12.7L56 216l11.3-11.3 63-63L244.7 256 130.3 370.3l-63-63L56 296 44.7 307.3 32 320l0 144 0 16 16 0 144 0 12.7-12.7L216 456l-11.3-11.3-63-63L256 267.3 370.3 381.7l-63 63L296 456l11.3 11.3L320 480l144 0 16 0 0-16 0-144-12.7-12.7L456 296l-11.3 11.3-63 63L267.3 256 381.7 141.7l63 63L456 216l11.3-11.3L480 192l0-144 0-16-16 0L320 32 307.3 44.7 296 56l11.3 11.3 63 63L256 244.7 141.7 130.3l63-63L216 56 204.7 44.7 192 32zm-6.6 432L48 464l0-137.4 8-8L193.4 456l-8 8zm141.3 0l-8-8L456 318.6l8 8L464 464l-137.4 0zm0-416L464 48l0 137.4-8 8L318.6 56l8-8z" />
    </Icon>
);

export default Maximize;
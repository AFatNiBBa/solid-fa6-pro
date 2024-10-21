
import { Icon } from "../../index";

/**
 * A component that renders the `up-right-from-square` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=thin up-right-from-square}
 * @preview ![up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/up-right-from-square.svg)
 */
const UpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M345 16l127 0c13.3 0 24 10.7 24 24l0 127c0 13.8-11.2 25-25 25c-6.6 0-13-2.6-17.7-7.3L396 127.3 213.7 309.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L384.7 116 327.3 58.6c-4.7-4.7-7.3-11-7.3-17.7c0-13.8 11.2-25 25-25zm-9 25c0 2.4 .9 4.7 2.6 6.3L464.7 173.4c1.7 1.7 4 2.6 6.3 2.6c5 0 9-4 9-9l0-127c0-4.4-3.6-8-8-8L345 32c-5 0-9 4-9 9zM0 88C0 57.1 25.1 32 56 32l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L56 48C33.9 48 16 65.9 16 88l0 368c0 22.1 17.9 40 40 40l368 0c22.1 0 40-17.9 40-40l0-144c0-4.4 3.6-8 8-8s8 3.6 8 8l0 144c0 30.9-25.1 56-56 56L56 512c-30.9 0-56-25.1-56-56L0 88z" />
    </Icon>
);

export default UpRightFromSquare;

import { Icon } from "../../index";

/**
 * A component that renders the `bug` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=sharp-thin bug}
 * @preview ![bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bug.svg)
 */
const Bug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16c-44.2 0-80 35.8-80 80l0 16 160 0 0-16c0-44.2-35.8-80-80-80zM160 96c0-53 43-96 96-96s96 43 96 96l0 16 0 16-16 0-160 0-16 0 0-16 0-16zM40 92.7l5.7 5.7L107.3 160l4.7 0 288 0 4.7 0 61.7-61.7 5.7-5.7L483.3 104l-5.7 5.7L416 171.3l0 4.7 0 104 88 0 8 0 0 16-8 0-88 0 0 24c0 33.1-10.1 63.9-27.3 89.4l.9 .9 80 80 5.7 5.7L464 507.3l-5.7-5.7L379 422.3c-27.8 33.3-68.8 55.2-115 57.5l0 .2-8 0-8 0 0-.2c-46.2-2.3-87.3-24.2-115-57.5L53.7 501.7 48 507.3 36.7 496l5.7-5.7 80-80 .9-.9C106.1 383.9 96 353.1 96 320l0-24L8 296l-8 0 0-16 8 0 88 0 0-104 0-4.7L34.3 109.7 28.7 104 40 92.7zM400 320l0-24 0-16 0-104-288 0 0 104 0 16 0 24c0 76.8 60.2 139.6 136 143.8L248 232l0-8 16 0 0 8 0 231.8c75.8-4.2 136-66.9 136-143.8z" />
    </Icon>
);

export default Bug;

import { Icon } from "../../index";

/**
 * A component that renders the `flask` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=sharp-light flask}
 * @preview ![flask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flask.svg)
 */
const Flask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 224l4.7 7.7L347.1 320l-246.2 0 54.3-88.3L160 224l0-9.1L160 32l128 0 0 182.9 0 9.1zM128 0L112 0 96 0l0 32 16 0 16 0 0 182.9L0 422.9 0 480l0 32 32 0 384 0 32 0 0-32 0-57.1-128-208L320 32l16 0 16 0 0-32L336 0 320 0 288 0 160 0 128 0zM32 432l49.2-80 285.5 0L416 432l0 48L32 480l0-48z" />
    </Icon>
);

export default Flask;

import { Icon } from "../../index";

/**
 * A component that renders the `scanner-keyboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-keyboard?s=sharp-regular scanner-keyboard}
 * @preview ![scanner-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/scanner-keyboard.svg)
 */
const ScannerKeyboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 64 48 0 0-64L128 0zM304 0l0 64 48 0 0-64L304 0zM256 0L224 0l0 64 32 0 0-64zM384 0l0 288 32 0L416 0 384 0zM512 0L464 0l0 288 48 0L512 0zM48 144l256 0 0 320L48 464l0-320zm0-48L0 96l0 48L0 464l0 48 48 0 256 0 48 0 0-48 0-320 0-48-48 0L48 96zM272 256l0-80L80 176l0 80 192 0zM160 304l-80 0 0 48 80 0 0-48zM80 384l0 48 80 0 0-48-80 0zm192-80l-80 0 0 48 80 0 0-48zm-80 80l0 48 80 0 0-48-80 0z" />
    </Icon>
);

export default ScannerKeyboard;

import { Icon } from "../../index";

/**
 * A component that renders the `books` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=sharp-regular books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 416l0 48 64 0 0-48-64 0zm64 96l-64 0L0 512l0-48 0-48 0-24 0-24L0 144l0-24L0 96 0 48 0 0 48 0l64 0 48 0 64 0 48 0 0 30.1 11.2-3 54.9-14.7L384.4 0l12.4 46.4 11 41.2 6.2 23.2 6.2 23.2 54.8 204.6 6.2 23.2 6.2 23.2 11 41.2L511 472.4l-46.4 12.4-54.9 14.7L363.4 512 351 465.6l-11-41.2-6.2-23.2-6.2-23.2L272.7 173.5l-.7-2.5L272 368l0 24 0 24 0 48 0 48-48 0-64 0-48 0zm48-48l64 0 0-48-64 0 0 48zM112 48L48 48l0 48 64 0 0-48zm0 96l-64 0 0 224 64 0 0-224zm48-48l64 0 0-48-64 0 0 48zm64 272l0-224-64 0 0 224 64 0zm173.3 85.2l54.9-14.7-11-41.2L386.3 412l11 41.2zm-23.5-87.5L428.8 351 374 146.3 319 161l54.8 204.6zm-67.2-251L361.5 100l-11-41.2L295.6 73.5l11 41.2z" />
    </Icon>
);

export default Books;
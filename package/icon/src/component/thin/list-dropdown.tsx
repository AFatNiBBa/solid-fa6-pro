
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=thin list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 80 480 0 0-80c0-26.5-21.5-48-48-48L64 48zM16 192l0 224c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-224L16 192zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM120 272l272 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-272 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 96l272 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-272 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM349 89.8l35 28 35-28c3.4-2.8 8.5-2.2 11.2 1.2s2.2 8.5-1.2 11.2l-40 32c-2.9 2.3-7.1 2.3-10 0l-40-32c-3.4-2.8-4-7.8-1.2-11.2s7.8-4 11.2-1.2z" />
    </Icon>
);

export default ListDropdown;
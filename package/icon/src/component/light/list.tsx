
import { Icon } from "../../index";

/**
 * A component that renders the `list` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=light list}
 * @preview ![list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/list.svg)
 */
const List: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 112l0-32 32 0 0 32-32 0zM16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48C26.7 48 16 58.7 16 72zm160 8c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L176 80zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zM48 240l32 0 0 32-32 0 0-32zm-8-32c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0zm8 224l0-32 32 0 0 32-32 0zM16 392l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default List;
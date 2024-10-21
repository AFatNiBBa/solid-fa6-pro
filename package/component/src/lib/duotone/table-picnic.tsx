
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-picnic` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-picnic?s=duotone table-picnic}
 * @preview ![table-picnic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/table-picnic.svg)
 */
const TablePicnic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 288c149.3 0 298.6 0 448 0c-16.2 0-32.5 0-48.7 0l46.4 116.1c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8L362.3 288l-212.7 0-56 139.9c-6.6 16.4-25.2 24.4-41.6 17.8s-24.4-25.2-17.8-41.6L80.7 288c-16.2 0-32.5 0-48.7 0zM65.3 105.1C69.3 118.4 81.5 128 96 128c-.9 0-1.8 0-2.7-.1c-.9-.1-1.8-.2-2.6-.3c-1.7-.3-3.4-.7-5-1.3c-3.2-1.1-6.3-2.7-8.9-4.8c-5.4-4.1-9.4-9.8-11.4-16.4zM96 128c106.7 0 213.3 0 320 0c-16.2 0-32.5 0-48.7 0l38.4 96c-23 0-45.9 0-68.9 0l-38.4-96-84.7 0-38.4 96c-23 0-45.9 0-68.9 0l38.4-96L96 128zM319.3 64l1.5 0c-.5 0-1 0-1.5 0z" />
        <path d="M96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64zM32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 224z" />
    </Icon>
);

export default TablePicnic;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can?s=duotone trash-can}
 * @preview ![trash-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-can.svg)
 */
const TrashCan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 352c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352L32 96zm80 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm96 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm96 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224z" />
        <path d="M163.8 0c-12.1 0-23.2 6.8-28.6 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0z" />
    </Icon>
);

export default TrashCan;
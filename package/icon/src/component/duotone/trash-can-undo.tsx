
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-undo` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-undo?s=duotone trash-can-undo}
 * @preview ![trash-can-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-can-undo.svg)
 */
const TrashCanUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l384 0 0 352c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 96zM96 256c0 6.8 2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L182.5 280l57.5 0c22.1 0 40 17.9 40 40l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-48.6-39.4-88-88-88l-57.5 0 33.5-30.2c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-80 72c-5.1 4.6-7.9 11-7.9 17.8z" />
        <path d="M163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3C140.6 6.8 151.7 0 163.8 0zm54.1 167.9c8.9 9.9 8.1 25-1.8 33.9L182.5 232l57.5 0c48.6 0 88 39.4 88 88l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40c0-22.1-17.9-40-40-40l-57.5 0 33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z" />
    </Icon>
);

export default TrashCanUndo;
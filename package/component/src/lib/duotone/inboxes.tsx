
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=duotone inboxes}
 * @preview ![inboxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/inboxes.svg)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 400l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-76.2 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L48 352c-26.5 0-48 21.5-48 48zM79.3 160l45 0c12.1 0 23.2 6.8 28.6 17.7c4.8 9.5 9.5 19.1 14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7l120.4 0c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7l45 0L394.3 64 117.7 64c-12.8 32-25.6 64-38.4 96z" />
        <path d="M79.3 160l38.4-96 276.7 0 38.4 96-45 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7l-45 0zm33-160c-22.9 0-43.5 13.9-52 35.2L4 175.8c-2.6 6.6-4 13.7-4 20.8L0 264c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-67.4c0-7.1-1.4-14.2-4-20.8L451.7 35.2C443.2 13.9 422.6 0 399.8 0L112.2 0z" />
    </Icon>
);

export default Inboxes;
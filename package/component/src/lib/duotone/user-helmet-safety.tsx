
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-helmet-safety` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-helmet-safety?s=duotone user-helmet-safety}
 * @preview ![user-helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-helmet-safety.svg)
 */
const UserHelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0 70.7 57.3 128 128 128s128-57.3 128-128c0-5.4-.3-10.8-1-16L97 176c-.7 5.2-1 10.6-1 16z" />
        <path d="M216 0c-13.3 0-24 10.7-24 24l0 56L163.6 23.1C125.6 43.5 99 82.6 96.2 128l-.2 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-.2 0C349 82.6 322.4 43.5 284.4 23.1L256 80l0-56c0-13.3-10.7-24-24-24L216 0zM134.4 352C60.2 352 0 412.2 0 486.4C0 500.5 11.5 512 25.6 512l396.8 0c14.1 0 25.6-11.5 25.6-25.6C448 412.2 387.8 352 313.6 352l-179.2 0z" />
    </Icon>
);

export default UserHelmetSafety;
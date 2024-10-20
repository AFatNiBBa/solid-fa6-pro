
import { Icon, generic } from "../../index";

/**
 * A component that renders the `syringe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/syringe?s=duotone syringe}
 * @preview ![syringe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/syringe.svg)
 */
const Syringe: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 488c0 6.1 2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l57-57 88.8 0c14.9 0 29.1-5.9 39.6-16.4L440 217.9c-.3-.3-.7-.6-1-.9l-16-16-56-56L311 89 295 73c-.3-.3-.6-.7-.9-1c-27.9 27.9-55.8 55.8-83.7 83.7c19 19 38 38 57 57c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0c-19-19-38-38-57-57c-13.8 13.8-27.6 27.6-41.4 41.4c19 19 38 38 57 57c6.2 6.2 6.2 16.4 0 22.6c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7c-19-19-38-38-57-57L80.4 285.7C69.9 296.2 64 310.4 64 325.3l0 88.8L7 471c-4.7 4.7-7 10.8-7 17z" />
        <path d="M441 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15L384 94.1 329 39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72 72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55L456 89.9l15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L473 39 441 7zM210.3 155.7l-22.6 22.6 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57zm-64 64l-22.6 22.6 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z" />
    </Icon>
);

export default Syringe;

import { Icon } from "../../index";

/**
 * A component that renders the `syringe` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/syringe?s=regular syringe}
 * @preview ![syringe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/syringe.svg)
 */
const Syringe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M407 7c-9.4 9.4-9.4 24.6 0 33.9l15 15L384 94.1 329 39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72 72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55L456 89.9l15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L473 39 441 7c-9.4-9.4-24.6-9.4-33.9 0zM271.4 94.6l-191 191C69.9 296.2 64 310.4 64 325.3l0 88.8L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 88.8 0c14.9 0 29.1-5.9 39.6-16.4l191-191c-.3-.3-.7-.6-1-1l-33-33-191 191c-1.5 1.5-3.5 2.3-5.7 2.3L112 400l0-74.7c0-2.1 .8-4.2 2.3-5.7l27.3-27.3 23 23c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-23-23 41.4-41.4 23 23c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-23-23 41.4-41.4 23 23c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-23-23 13.1-13.1-33-33c-.3-.3-.6-.7-1-1z" />
    </Icon>
);

export default Syringe;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `syringe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/syringe?s=sharp-duotone-solid syringe}
 * @preview ![syringe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/syringe.svg)
 */
const Syringe: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.3 476.8l33.9 33.9 17-17L97.9 448 200 448l9.9 0 7-7 223-223c-.3-.3-.6-.6-1-1c-5.3-5.3-10.7-10.7-16-16c-18.7-18.7-37.3-37.3-56-56s-37.3-37.3-56-56c-5.3-5.3-10.7-10.7-16-16c-.3-.3-.6-.7-.9-1l-83.7 83.7 57 57c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6l-11.3-11.3c-19-19-38-38-57-57c-13.8 13.8-27.6 27.6-41.4 41.4l57 57c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6l-11.3-11.3c-19-19-38-38-57-57C106.1 259.9 88.6 277.5 71 295l-7 7 0 9.9 0 102.1L18.2 459.8l-17 17z" />
        <path d="M452.2 18.2l-17-17L401.3 35.2l17 17 3.8 3.8L384 94.1 329 39l-17-17L278.1 56l17 17 72 72 72 72 17 17L489.9 200l-17-17-55-55L456 89.9l3.8 3.8 17 17 33.9-33.9-17-17L473 39 452.2 18.2zM180.7 299.3L192 310.6 214.6 288l-11.3-11.3-57-57-22.6 22.6 57 57zm64-64L256 246.6 278.6 224l-11.3-11.3-57-57-22.6 22.6 57 57z" />
    </Icon>
);

export default Syringe;
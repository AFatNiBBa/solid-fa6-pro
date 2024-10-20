
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver-wrench` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=duotone screwdriver-wrench}
 * @preview ![screwdriver-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/screwdriver-wrench.svg)
 */
const ScrewdriverWrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1C7.2 408.8 0 426.1 0 444.1zM104 432a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 144c0 .3 0 .5 0 .8l85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144z" />
        <path d="M47 7c8.5-8.5 22-9.4 31.6-2.1l104 80c5.9 4.5 9.4 11.6 9.4 19l0 54.1 109 109c29-14.7 65.4-10 89.6 14.3l112 112c12.5 12.5 12.5 32.8 0 45.3l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-112-112c-24.2-24.2-29-60.6-14.3-89.6l-109-109L104 192c-7.5 0-14.5-3.5-19-9.4L5 78.6C-2.4 69.1-1.5 55.6 7 47L47 7z" />
    </Icon>
);

export default ScrewdriverWrench;
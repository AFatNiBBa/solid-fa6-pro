
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spider` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spider?s=sharp-duotone-solid spider}
 * @preview ![spider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spider.svg)
 */
const Spider: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M67.7 133.6L79 145l72.1 72.1c8.3 2.8 16.6 5.5 24.9 8.3c0-17.1 0-34.2 0-51.3l-51.7-51.7 33.8-81.2 9.2-22.2L123.1 .6l-9.2 22.2-40 96-6.2 14.8zM336 174.1l0 51.3c8.3-2.8 16.6-5.5 24.9-8.3L433 145l11.4-11.4-6.2-14.8-40-96L388.9 .6 344.6 19.1l9.2 22.2 33.8 81.2L336 174.1z" />
        <path d="M0 139.9l0-21.2 39.2-13.1 7.6 22.8L67 189l109 36.3 0-65.4c0-38.7 27.5-71 64-78.4l0 46.4 32 0 0-46.4c36.5 7.4 64 39.7 64 78.4l0 65.4L445 189l20.2-60.6 7.6-22.8L512 118.7l0 21.2-1.2 3.7-24 72L483 227l-11.4 3.8L395.9 256l75.7 25.2L483 285l3.8 11.4 24 72 1.2 3.7 0 21.2-39.2 13.1-7.6-22.8L445 323l-84.2-28.1L433 367l11.4 11.4-6.2 14.8-40 96-9.2 22.2-44.3-18.5 9.2-22.2 33.8-81.2L352 353.9c-1 52.1-43.6 94.1-96 94.1s-95-41.9-96-94.1l-35.7 35.7 33.8 81.2 9.2 22.2-44.3 18.5-9.2-22.2-40-96-6.2-14.8L79 367l72.1-72.1L67 323 46.8 383.6l-7.6 22.8L0 393.3l0-21.2 1.2-3.7 24-72L29 285l11.4-3.8L116.1 256 40.4 230.8 29 227l-3.8-11.4-24-72L0 139.9z" />
    </Icon>
);

export default Spider;
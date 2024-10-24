
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wreath` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wreath?s=sharp-duotone-solid wreath}
 * @preview ![wreath](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wreath.svg)
 */
const Wreath: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 182.6c0 15.8 5.7 30.2 15.2 41.4C5.7 235.2 0 249.6 0 265.4c0 27.9 17.8 51.6 42.6 60.3C40.9 331.5 40 337.7 40 344c0 35.3 28.7 64 64 64c6.3 0 12.5-.9 18.2-2.6c1.5 4.2 3.4 8.3 5.8 12.1l0-33.4 96 32 96-32 0 33.4c2.3-3.8 4.3-7.8 5.8-12.1c5.8 1.7 11.9 2.6 18.2 2.6c35.3 0 64-28.7 64-64c0-6.3-.9-12.5-2.6-18.2c24.8-8.8 42.6-32.5 42.6-60.3c0-15.8-5.7-30.2-15.2-41.4c9.5-11.2 15.2-25.6 15.2-41.4c0-27.9-17.8-51.6-42.6-60.3c1.7-5.8 2.6-11.9 2.6-18.2c0-35.3-28.7-64-64-64c-6.3 0-12.5 .9-18.2 2.6C317 17.8 293.3 0 265.4 0C249.6 0 235.2 5.7 224 15.2C212.8 5.7 198.4 0 182.6 0C154.7 0 131 17.8 122.2 42.6C116.5 40.9 110.3 40 104 40c-35.3 0-64 28.7-64 64c0 6.3 .9 12.5 2.6 18.2C17.8 131 0 154.7 0 182.6zM120 224l31.9-29.8-1.5-43.7 43.7 1.5L224 120l29.8 31.9 43.7-1.5-1.5 43.7L328 224l-31.9 29.8 1.5 43.7-43.7-1.5L224 328l-29.8-31.9-43.7 1.5 1.5-43.7L120 224z" />
        <path d="M128 512V384l96 32 96-32V512l-96-32-96 32z" />
    </Icon>
);

export default Wreath;
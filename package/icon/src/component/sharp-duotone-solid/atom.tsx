
import { Icon, generic } from "../../index";

/**
 * A component that renders the `atom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/atom?s=sharp-duotone-solid atom}
 * @preview ![atom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/atom.svg)
 */
const Atom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M42.4 128C21.7 165.1 33 210.8 66 256c-33 45.2-44.3 90.9-23.6 128c20.2 36.3 62.5 49.3 115.2 43.2c22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2c7.1-12.7 10.4-26.4 10.4-40.8c0-27.6-12.3-57.5-34-87.2c21.7-29.8 34-59.7 34-87.2c0-14.3-3.3-28.1-10.4-40.8c-20.2-36.3-62.5-49.3-115.2-43.2C332.4 32.7 298.8 0 256 0s-76.4 32.7-98.4 84.8c-52.7-6.1-95 6.8-115.2 43.2zm55.9 31.1c1.6-2.9 8.4-13 40.2-11.7c-2.8 13.1-5 26.9-6.7 41.2c-7.6 6.1-14.8 12.3-21.6 18.6C91.4 177 96 163.3 98.3 159.1zm0 193.8c-2.3-4.2-7-17.9 11.9-48.1c6.8 6.3 14 12.5 21.6 18.6c1.7 14.2 3.9 28 6.7 41.2c-31.8 1.4-38.6-8.7-40.2-11.7zM192 256c0-11.5 .4-22.7 1-33.6c10.6-7.6 22.1-15.1 34.2-22.4c9.7-5.8 19.3-11.2 28.8-16c9.4 4.8 19 10.2 28.8 16c12.1 7.3 23.6 14.8 34.2 22.4c.7 10.8 1 22 1 33.6s-.4 22.7-1 33.6c-10.6 7.6-22.1 15.1-34.2 22.4c-9.7 5.8-19.3 11.2-28.8 16c-9.4-4.8-19-10.2-28.8-16c-12.1-7.3-23.6-14.8-34.2-22.4c-.7-10.8-1-22-1-33.6zM221.1 99.7C237.9 65.9 252.1 64 256 64s18.1 1.9 34.9 35.7c-11.4 3.9-23.1 8.4-34.9 13.5c-11.8-5.1-23.4-9.7-34.9-13.5zm0 312.6c11.4-3.9 23.1-8.4 34.9-13.5c11.8 5.1 23.4 9.7 34.9 13.5c-16.7 33.8-31 35.7-34.9 35.7s-18.1-1.9-34.9-35.7zM373.5 147.5c31.8-1.4 38.6 8.7 40.2 11.7c2.3 4.2 7 17.9-11.9 48.1c-6.8-6.3-14-12.5-21.6-18.6c-1.7-14.3-3.9-28-6.7-41.2zm0 217.1c2.8-13.1 5-26.9 6.7-41.2c7.6-6.1 14.8-12.3 21.6-18.6c18.9 30.2 14.2 44 11.9 48.1c-1.6 2.9-8.4 13-40.2 11.7z" />
        <path d="M256 296l-40-40 40-40 40 40-40 40z" />
    </Icon>
);

export default Atom;
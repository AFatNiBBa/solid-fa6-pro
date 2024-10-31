
import { Icon } from "../../index";

/**
 * A component that renders the `trophy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trophy?s=sharp-regular trophy}
 * @preview ![trophy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trophy.svg)
 */
const Trophy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 378.4c4-1.6 8.4-3.6 13.1-6.1c33.8-6 95.5-22 149.5-63.7C530.1 265.7 576 196.5 576 88l0-24-24 0L446.4 64c.3-5.2 .5-10.6 .7-16c.6-15.3 .9-31.3 .9-48L400 0 176 0 128 0c0 16.7 .3 32.7 .9 48c.2 5.4 .4 10.8 .7 16L24 64 0 64 0 88C0 196.5 45.9 265.7 101.5 308.6c53.9 41.7 115.7 57.6 149.5 63.7c4.7 2.5 9.1 4.5 13.1 6.1l0 85.6-80 0-24 0 0 48 24 0 104 0 104 0 24 0 0-48-24 0-80 0 0-85.6zM445.2 270.6c-17.5 13.6-36.3 24-54.4 32c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-6 78.4-41.3 127.3-81.9 158.6zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-18.1-8-36.8-18.4-54.4-32C90.2 239.3 54.9 190.4 48.9 112zm128-64l222.2 0c-6.1 153.1-40.8 224.7-68 257.3c-14.7 17.7-28.1 25-36 28.2c-3.1 1.2-5.6 1.9-7.2 2.3c-1.6-.3-4.1-1-7.2-2.3c-7.9-3.1-21.2-10.5-36-28.2C217.7 272.7 183 201.1 176.9 48z" />
    </Icon>
);

export default Trophy;
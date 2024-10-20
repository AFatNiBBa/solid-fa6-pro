
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=light files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 384c-17.7 0-32-14.3-32-32l0-288c0-17.7 14.3-32 32-32l144 0 0 80c0 17.7 14.3 32 32 32l80 0c0 .3 0 .5 0 .8L416 352c0 17.7-14.3 32-32 32l-224 0zM336 57.5L390 112l-54 0 0-54.5zM160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-207.2c0-12.7-5-24.8-13.9-33.8l-96-96.8C329.1 5.1 316.8 0 304 0L160 0zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 384c0 70.7 57.3 128 128 128l208 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-208 0c-53 0-96-43-96-96l0-272z" />
    </Icon>
);

export default Files;
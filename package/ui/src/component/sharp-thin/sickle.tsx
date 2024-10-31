
import { Icon } from "../../index";

/**
 * A component that renders the `sickle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=sharp-thin sickle}
 * @preview ![sickle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sickle.svg)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0C214 0 128 86 128 192c0 68 35.3 127.7 88.6 161.8l5.4 3.5 4.6-4.6 37.9-37.9 4.4-4.4-3.2-5.3C254.5 286 248 263.8 248 240c0-70.7 57.3-128 128-128c55.5 0 102.7 35.3 120.5 84.6L512 194c0-.7 0-1.3 0-2C512 86 426 0 320 0zM144 192c0-97.2 78.8-176 176-176c84.4 0 154.9 59.4 172 138.7C465.8 119.1 423.6 96 376 96c-79.5 0-144 64.5-144 144c0 24.5 6.1 47.6 16.9 67.8l-29 29C174 305 144 252 144 192zM117.7 298.3l-5.7-5.7L100.7 304l5.7 5.7L116.7 320 5.5 431.1l-5.7 5.7 5.7 5.7 64 64 5.7 5.7 5.7-5.7L192 395.3l10.3 10.3 5.7 5.7L219.3 400l-5.7-5.7-16-16-64-64-16-16zM22.5 436.8L128 331.3 180.7 384 75.2 489.5 22.5 436.8z" />
    </Icon>
);

export default Sickle;
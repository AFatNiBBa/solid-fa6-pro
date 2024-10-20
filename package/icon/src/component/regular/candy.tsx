
import { Icon } from "../../index";

/**
 * A component that renders the `candy` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy?s=regular candy}
 * @preview ![candy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/candy.svg)
 */
const Candy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M309 399.6L198.5 178.7C184.3 201 176 227.5 176 256c0 75.8 58.6 137.9 133 143.6zM233.3 141L360 394.4c17.1-4.9 32.8-12.9 46.7-23.4L280 117.6c-17.1 4.9-32.8 12.9-46.7 23.4zM331 112.4L441.5 333.3C455.7 311 464 284.5 464 256c0-75.8-58.6-137.9-133-143.6zM320 64c88 0 162.1 59.1 184.8 139.8l91.9-49c10.5-5.6 23.5-2.7 30.6 6.9s6.1 22.9-2.3 31.3l-29.6 29.6 29.1 10.9C633.8 237 640 246 640 256s-6.2 19-15.6 22.5l-29.1 10.9L625 319c8.4 8.4 9.4 21.7 2.3 31.3s-20.1 12.5-30.6 6.9l-91.9-49C482.1 388.9 408 448 320 448s-162.1-59.1-184.8-139.8l-91.9 49c-10.5 5.6-23.5 2.7-30.6-6.9S6.6 327.4 15 319l29.6-29.6L15.6 278.5C6.2 275 0 266 0 256s6.2-19 15.6-22.5l29.1-10.9L15 193c-8.4-8.4-9.4-21.7-2.3-31.3s20.1-12.5 30.6-6.9l91.9 49C157.9 123.1 232 64 320 64z" />
    </Icon>
);

export default Candy;
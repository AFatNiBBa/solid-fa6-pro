
import { Icon } from "../../index";

/**
 * A component that renders the `file-svg` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-svg?s=sharp-regular file-svg}
 * @preview ![file-svg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-svg.svg)
 */
const FileSvg: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 464l-64 0L48 48l176 0 0 112 112 0 0 144 48 0 0-176L256 0 48 0 0 0 0 48 0 464l0 48 48 0 64 0 0-48zm93.7-112c-25.2 0-45.7 20.4-45.7 45.7c0 17.3 9.8 33.1 25.2 40.8l31.2 15.6c4.6 2.3 7.6 7 7.6 12.2c0 7.5-6.1 13.7-13.7 13.7L176 480l-16 0 0 32 16 0 34.3 0c25.2 0 45.7-20.4 45.7-45.7c0-17.3-9.8-33.1-25.2-40.8l-31.2-15.6c-4.6-2.3-7.6-7-7.6-12.2c0-7.5 6.1-13.7 13.7-13.7l26.3 0 16 0 0-32-16 0-26.3 0zM320 368l0-16-32 0 0 16 0 35c0 21.1 3.8 42 11.2 61.8L313 501.6l3.9 10.4 11.1 0 16 0 11.1 0 3.9-10.4 13.8-36.8C380.2 445 384 424.1 384 403l0-35 0-16-32 0 0 16 0 35c0 17.3-3.1 34.4-9.2 50.6L336 471.8l-6.8-18.2c-6.1-16.2-9.2-33.3-9.2-50.6l0-35zm96 24l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-24 0-16-16 0-16 0-16 0 0 32 16 0 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 16 32 0 0-16c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40z" />
    </Icon>
);

export default FileSvg;
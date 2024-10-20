
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=regular droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 464c37.9 0 72.4-14.6 98.1-38.6l38 30C421.4 490.3 373.2 512 320 512c-106 0-192-86-192-192c0-27.7 12-62.9 29.8-99.6l38.7 30.5c-1.2 2.7-2.4 5.4-3.6 8c-11.9 27.6-17 48.2-17 61.1c0 79.5 64.5 144 144 144zm185.2-93.3l125.6 98.4c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1L205.8 136c34.9-54.7 72-103 88.9-124.3C300.6 4.2 309.5 0 319.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C381.8 57.7 512 228.8 512 320c0 17.6-2.4 34.5-6.8 50.7zm-42.3-33.1c.7-5.8 1.1-11.6 1.1-17.6c0-13-5.1-33.5-17-61.1c-11.5-26.6-27.6-55.8-45.5-84.7c-29-46.8-61-90.2-81.5-117c-19.3 25.1-48.7 65-76.3 108.5L462.9 337.5zM224 312c0-11.9 8.7-21.8 20.1-23.7l27.9 21.9c0 .6 .1 1.2 .1 1.7c0 30.9 25.1 56 56 56c13.3 0 24 10.7 24 24s-10.7 24-24 24c-57.4 0-104-46.6-104-104z" />
    </Icon>
);

export default DropletSlash;
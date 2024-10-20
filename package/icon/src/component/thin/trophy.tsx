
import { Icon } from "../../index";

/**
 * A component that renders the `trophy` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trophy?s=thin trophy}
 * @preview ![trophy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trophy.svg)
 */
const Trophy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 16l224 0c17.7 0 31.8 14.5 31.1 31.6c-6.3 165.9-45.5 245.5-80.2 283.6c-17.3 19-33.8 28.1-45.5 32.5c-5.9 2.2-10.6 3.3-13.7 3.8c-1.5 .2-2.7 .4-3.3 .4l-.4 0-.4 0c-.6-.1-1.8-.2-3.3-.4c-3.1-.5-7.8-1.6-13.7-3.8c-11.7-4.4-28.2-13.5-45.5-32.5c-34.7-38.1-73.9-117.8-80.2-283.6C144.2 30.5 158.3 16 176 16zM400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L40 64C18.2 64-.7 82 1.8 104.9c10.2 92 62.3 158.4 119 202.8c56.5 44.3 118.4 67.5 149.8 73c0 0 0 0 0 0c3.6 1.1 6.8 1.9 9.4 2.3l0 113-112 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l120 0 120 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-112 0 0-113c2.6-.5 5.8-1.2 9.4-2.3c0 0 0 0 0 0c31.5-5.5 93.3-28.7 149.8-73c56.7-44.5 108.8-110.8 119-202.8C576.7 82 557.8 64 536 64l-89.6 0c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zm45.4 80L536 80c13.5 0 23.7 10.9 22.3 23.1c-9.6 86.5-58.5 149.3-113 192c-29.5 23.2-60.5 40.2-87.2 51.8c37.1-37.7 77-113.7 87.3-266.9zM217.9 346.9c-26.7-11.6-57.7-28.6-87.2-51.8c-54.4-42.7-103.4-105.5-113-192C16.3 90.9 26.5 80 40 80l90.6 0c10.3 153.2 50.3 229.2 87.3 266.9z" />
    </Icon>
);

export default Trophy;
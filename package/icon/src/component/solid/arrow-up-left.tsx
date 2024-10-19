
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=solid arrow-up-left}
 * @preview ![arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTYuMjgxIDQyMC4yODFDMzQ4LjQ2OSA0MjguMDk0IDMzOC4yMzQgNDMyIDMyOCA0MzJTMzA3LjUzMSA0MjguMDk0IDI5OS43MTkgNDIwLjI4MUw5NiAyMTYuNTYyVjMyOEM5NiAzNTAuMDk0IDc4LjA5NCAzNjggNTYgMzY4UzE2IDM1MC4wOTQgMTYgMzI4VjEyMEMxNiA5Ny45MDYgMzMuOTA2IDgwIDU2IDgwSDI2NEMyODYuMDk0IDgwIDMwNCA5Ny45MDYgMzA0IDEyMFMyODYuMDk0IDE2MCAyNjQgMTYwSDE1Mi41NjJMMzU2LjI4MSAzNjMuNzE5QzM3MS45MDYgMzc5LjM0NCAzNzEuOTA2IDQwNC42NTYgMzU2LjI4MSA0MjAuMjgxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M356.281 420.281C348.469 428.094 338.234 432 328 432S307.531 428.094 299.719 420.281L96 216.562V328C96 350.094 78.094 368 56 368S16 350.094 16 328V120C16 97.906 33.906 80 56 80H264C286.094 80 304 97.906 304 120S286.094 160 264 160H152.562L356.281 363.719C371.906 379.344 371.906 404.656 356.281 420.281Z" />
        </Icon>
    </>
}
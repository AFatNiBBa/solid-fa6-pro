
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `k` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/k?s=thin k}
 * @preview ![k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTguNDA1IDQ2Ny4yMTlDMzIxLjA2MiA0NzAuNzUgMzIwLjMxMiA0NzUuNzgxIDMxNi43OCA0NzguNDA2QzMxNS4zNDMgNDc5LjQ2OSAzMTMuNjU1IDQ4MCAzMTEuOTk5IDQ4MEMzMDkuNTYyIDQ4MCAzMDcuMTU1IDQ3OC44NzUgMzA1LjU5MyA0NzYuNzgxTDEyNC4wNDUgMjMzLjI0MkwxNiAzMzcuOTIyVjQ3MkMxNiA0NzYuNDA2IDEyLjQwNiA0ODAgOCA0ODBDMy41OTQgNDgwIDAgNDc2LjQwNiAwIDQ3MlY0MEMwIDM1LjU5NCAzLjU5NCAzMiA4IDMyQzEyLjQwNiAzMiAxNiAzNS41OTQgMTYgNDBWMzE1LjY0MUwzMDYuNDM3IDM0LjI1QzMwOS42NTUgMzEuMTg4IDMxNC43MTggMzEuMjgxIDMxNy43NDkgMzQuNDM4QzMyMC44MTIgMzcuNTk0IDMyMC43NDkgNDIuNjU2IDMxNy41NjIgNDUuNzVMMTM1LjYyMyAyMjIuMDIzTDMxOC40MDUgNDY3LjIxOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function K(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M318.405 467.219C321.062 470.75 320.312 475.781 316.78 478.406C315.343 479.469 313.655 480 311.999 480C309.562 480 307.155 478.875 305.593 476.781L124.045 233.242L16 337.922V472C16 476.406 12.406 480 8 480C3.594 480 0 476.406 0 472V40C0 35.594 3.594 32 8 32C12.406 32 16 35.594 16 40V315.641L306.437 34.25C309.655 31.188 314.718 31.281 317.749 34.438C320.812 37.594 320.749 42.656 317.562 45.75L135.623 222.023L318.405 467.219Z" />
        </Icon>
    </>
}
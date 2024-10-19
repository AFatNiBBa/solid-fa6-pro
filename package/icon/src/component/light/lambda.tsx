
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lambda` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=light lambda}
 * @preview ![lambda](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDY0QzQ0OCA0NzIuNzk5IDQ0MC44MDEgNDgwIDQzMiA0ODBIMzYyLjI1QzM0OS43MzQgNDgwIDMzOC4zNjMgNDcyLjcyMyAzMzMuMTE5IDQ2MS4zNTlMMTc3Ljc2IDEyNC43MTVMMzAuNzI1IDQ3MC4yNUMyOC4xMzEgNDc2LjM0NCAyMi4yMjUgNDgwIDE2LjAwNiA0ODBDMTMuOTEyIDQ4MCAxMS43ODcgNDc5LjU5NCA5Ljc1NiA0NzguNzE5QzEuNiA0NzUuMjUgLTIuMTgyIDQ2NS44NzUgMS4yODcgNDU3Ljc1TDE1OS42NzggODUuNTMxTDE1MS44OTEgNjguNjU4QzE1MC41ODYgNjUuODE4IDE0Ny43NDggNjQgMTQ0LjYyNSA2NEgxNkM3LjE5OSA2NCAwIDU2Ljc5OSAwIDQ4QzAgMzkuMTk5IDcuMTk5IDMyIDE2IDMySDE0OS43NUMxNjIuMjY2IDMyIDE3My42MzkgMzkuMjc3IDE3OC44ODMgNTAuNjQxTDM2MC4xMjUgNDQzLjM3NUMzNjEuMzc1IDQ0Ni4yNSAzNjQuMjUgNDQ4IDM2Ny4zNzUgNDQ4SDQzMkM0NDAuODAxIDQ0OCA0NDggNDU1LjE5OSA0NDggNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Lambda(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 464C448 472.799 440.801 480 432 480H362.25C349.734 480 338.363 472.723 333.119 461.359L177.76 124.715L30.725 470.25C28.131 476.344 22.225 480 16.006 480C13.912 480 11.787 479.594 9.756 478.719C1.6 475.25 -2.182 465.875 1.287 457.75L159.678 85.531L151.891 68.658C150.586 65.818 147.748 64 144.625 64H16C7.199 64 0 56.799 0 48C0 39.199 7.199 32 16 32H149.75C162.266 32 173.639 39.277 178.883 50.641L360.125 443.375C361.375 446.25 364.25 448 367.375 448H432C440.801 448 448 455.199 448 464Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `less-than` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=light less-than}
 * @preview ![less-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODIuNTYxIDQyMi42MjVDMzc5Ljg4OSA0MjguNTMxIDM3NC4wNzYgNDMyIDM2Ny45ODIgNDMyQzM2NS43NzkgNDMyIDM2My41MjkgNDMxLjUzMSAzNjEuMzczIDQzMC41NjJMOS4zNzUgMjcwLjU1N0MzLjY3MiAyNjcuOTYzIDAgMjYyLjI3NSAwIDI1NS45OTJDMCAyNDkuNzExIDMuNjcyIDI0NC4wMjMgOS4zNzUgMjQxLjQzTDM2MS4zNzMgODEuNDI0QzM2OS40NjcgNzcuNzk5IDM3OC45MzYgODEuMzMgMzgyLjU2MSA4OS4zNjFDMzg2LjIxNyA5Ny40MjQgMzgyLjY3IDEwNi44OTMgMzc0LjYyMyAxMTAuNTUxTDU0LjY3MiAyNTUuOTkyTDM3NC42MjMgNDAxLjQzNkMzODIuNjcgNDA1LjA5MiAzODYuMjE3IDQxNC41NjIgMzgyLjU2MSA0MjIuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LessThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M382.561 422.625C379.889 428.531 374.076 432 367.982 432C365.779 432 363.529 431.531 361.373 430.562L9.375 270.557C3.672 267.963 0 262.275 0 255.992C0 249.711 3.672 244.023 9.375 241.43L361.373 81.424C369.467 77.799 378.936 81.33 382.561 89.361C386.217 97.424 382.67 106.893 374.623 110.551L54.672 255.992L374.623 401.436C382.67 405.092 386.217 414.562 382.561 422.625Z" />
        </Icon>
    </>
}
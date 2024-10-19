
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire?s=regular fire}
 * @preview ![fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjMuNSA1MS4yNUMzMDIuNzUgNzAuNSAyODQgOTAuNzUgMjY3LjM3NSAxMTEuMTI1QzI0MC4xMjUgNzMuNjI1IDIwNi4yNSAzNS41IDE2OCAwQzY5Ljc1IDkxLjEyNSAwIDIxMC4wMDEgMCAyODEuNjI1QzAgNDA4Ljg3NSAxMDAuMjUgNTEyIDIyNCA1MTJTNDQ4IDQwOC44NzUgNDQ4IDI4MS42MjVDNDQ4IDIyOC4zNzUgMzk2IDExOC41IDMyMy41IDUxLjI1Wk0yMjQgNDY0QzEyNyA0NjQgNDggMzgyLjEyNSA0OCAyODEuNjI1QzQ4IDIzNi4yNSA5Mi4yNSAxNDguMzc1IDE2OC4xMjUgNjcuNUMxOTAuNSA5MC44NzUgMjExIDExNS4yNSAyMjguNSAxMzkuMzc1TDI2NS4xMjUgMTg5Ljc1TDMwNC41IDE0MS41QzMxMC4zNzUgMTM0LjM3NSAzMTYuMzc1IDEyNy4zNzUgMzIyLjUgMTIwLjVDMzY4Ljg3NSAxNzguMDAxIDQwMCAyNTAuMzc1IDQwMCAyODEuNjI1QzQwMCAzODIuMTI1IDMyMSA0NjQgMjI0IDQ2NFpNMzEzLjUgMjQzLjEyNUwyNjIuMTI1IDMwMS42MjVDMjYyLjEyNSAzMDEuNjI1IDE4MS43NSAxOTkgMTc1Ljc1IDE5MkMxMzMuMjUgMjQyLjg3NSAxMTIgMjcyLjYyNSAxMTIgMzA2LjM3NUMxMTIgMzc0LjI1IDE2My4zNzUgNDE2IDIyNi41IDQxNkMyNTEuNzUgNDE2IDI3NS4xMjUgNDA4LjEyNSAyOTQuMTI1IDM5NC44NzVDMzM3LjEyNSAzNjQuNzUgMzQ3LjI1IDMwNi4yNSAzMjMuMzc1IDI2MC42MjVDMzIwLjM3NSAyNTUgMzE3LjEyNSAyNDkuMTI1IDMxMy41IDI0My4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Fire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M323.5 51.25C302.75 70.5 284 90.75 267.375 111.125C240.125 73.625 206.25 35.5 168 0C69.75 91.125 0 210.001 0 281.625C0 408.875 100.25 512 224 512S448 408.875 448 281.625C448 228.375 396 118.5 323.5 51.25ZM224 464C127 464 48 382.125 48 281.625C48 236.25 92.25 148.375 168.125 67.5C190.5 90.875 211 115.25 228.5 139.375L265.125 189.75L304.5 141.5C310.375 134.375 316.375 127.375 322.5 120.5C368.875 178.001 400 250.375 400 281.625C400 382.125 321 464 224 464ZM313.5 243.125L262.125 301.625C262.125 301.625 181.75 199 175.75 192C133.25 242.875 112 272.625 112 306.375C112 374.25 163.375 416 226.5 416C251.75 416 275.125 408.125 294.125 394.875C337.125 364.75 347.25 306.25 323.375 260.625C320.375 255 317.125 249.125 313.5 243.125Z" />
        </Icon>
    </>
}
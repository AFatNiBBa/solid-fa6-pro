
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire-smoke` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire-smoke?s=solid fire-smoke}
 * @preview ![fire-smoke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggMjg4QzQ5MC44NzUgMjg4IDQ1OC4yNSAzMDYuMjUgNDM3Ljg3NSAzMzQuMTI1QzQxOC4zNzUgMjg4LjI1IDM3MyAyNTYgMzIwIDI1NlMyMjEuNjI1IDI4OC4yNSAyMDIuMTI1IDMzNC4xMjVDMTgxLjc1IDMwNi4yNSAxNDkuMTI1IDI4OCAxMTIgMjg4QzUwLjEyNSAyODggMCAzMzguMTI1IDAgNDAwUzUwLjEyNSA1MTIgMTEyIDUxMkg1MjhDNTg5Ljg3NSA1MTIgNjQwIDQ2MS44NzUgNjQwIDQwMFM1ODkuODc1IDI4OCA1MjggMjg4Wk0xOTUuNzUgMjgzLjI1QzIwNS4zNzUgMjcxLjI1IDIxNyAyNjAuODc1IDIyOS42MjUgMjUyLjI1QzIyNC44NzUgMjQwLjYyNSAyMjIuMjUgMjI3LjUgMjIyLjI1IDIxMi44NzVDMjIyLjI1IDE4My4xMjUgMjQwLjM3NSAxNTYuNzUgMjc2LjYyNSAxMTEuNzVDMjgxLjc1IDExOC4wMDEgMzUwLjM3NSAyMDguNzUgMzUwLjM3NSAyMDguNzVMMzk0LjI1IDE1N0MzOTcuMjUgMTYyLjI1IDQwMC4xMjUgMTY3LjUgNDAyLjYyNSAxNzIuMzc1QzQxNSAxOTYuODc1IDQxNi41IDIyNS41IDQwNy43NSAyNTAuMjVDNDIxLjM3NSAyNTkuMjUgNDMzLjc1IDI3MC4yNSA0NDQuMjUgMjgzQzQ1Ny43NSAyNzMuMjUgNDcyLjc1IDI2Ni4yNSA0ODguNzUgMjYxLjc1QzQ5My4yNSAyNDYuMjUgNDk1Ljg3NSAyMjkuNzUgNDk1Ljg3NSAyMTIuNzVDNDk1Ljg3NSAxNzIuNSA0NTUuMTI1IDg5LjM3NSAzOTguMTI1IDM4LjYyNUMzODEuNzUgNTMuMjUgMzY3IDY4LjUgMzUzLjg3NSA4NEMzMzIuNjI1IDU1Ljc1IDMwNi4xMjUgMjYuODc1IDI3NiAwQzE5OC43NSA2OC44NzUgMTQ0IDE1OC43NSAxNDQgMjEzQzE0NCAyMzAuMDAxIDE0Ni42MjUgMjQ2LjM3NSAxNTEuMjUgMjYxLjg3NUMxNjcuMTI1IDI2Ni41IDE4Mi4yNSAyNzMuNSAxOTUuNzUgMjgzLjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FireSmoke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M528 288C490.875 288 458.25 306.25 437.875 334.125C418.375 288.25 373 256 320 256S221.625 288.25 202.125 334.125C181.75 306.25 149.125 288 112 288C50.125 288 0 338.125 0 400S50.125 512 112 512H528C589.875 512 640 461.875 640 400S589.875 288 528 288ZM195.75 283.25C205.375 271.25 217 260.875 229.625 252.25C224.875 240.625 222.25 227.5 222.25 212.875C222.25 183.125 240.375 156.75 276.625 111.75C281.75 118.001 350.375 208.75 350.375 208.75L394.25 157C397.25 162.25 400.125 167.5 402.625 172.375C415 196.875 416.5 225.5 407.75 250.25C421.375 259.25 433.75 270.25 444.25 283C457.75 273.25 472.75 266.25 488.75 261.75C493.25 246.25 495.875 229.75 495.875 212.75C495.875 172.5 455.125 89.375 398.125 38.625C381.75 53.25 367 68.5 353.875 84C332.625 55.75 306.125 26.875 276 0C198.75 68.875 144 158.75 144 213C144 230.001 146.625 246.375 151.25 261.875C167.125 266.5 182.25 273.5 195.75 283.25Z" />
        </Icon>
    </>
}